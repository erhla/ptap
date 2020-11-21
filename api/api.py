import time
from flask import Flask, request, jsonify, send_file, send_from_directory, render_template
import pandas as pd
import uuid
from .mainfct import process_comps_input, process_input, address_candidates, record_log
from flask_cors import CORS

application = Flask(__name__, static_folder='../frontend/build/', template_folder='../frontend/build/')
CORS(application)

@application.route('/')
def index():
    return render_template('index.html')

@application.route('/api_v1/pin-lookup', methods=['POST'])
def handle_form0():
    #get pin from address / send to owner input page
    print('pin finder submit')
    pf_data = request.json
    print('PAGE DATA', request.json)
    print('REQUEST OBJECT', request)
    try:
        response_dict = get_pin(pf_data)
        response_dict['uuid'] = logger(pf_data, 'address_finder')
        resp = jsonify({'request_status': time.time(),
        'response': response_dict})
    except Exception as e:
        resp = jsonify({'error': str(e)})
        logger(pf_data, 'address_finder', e)

    return resp

@application.route('/api_v1/submit', methods=['POST'])
def handle_form():
    #owner information submit / get comps / send to comps select page
    print('owner info submit')
    owner_data = request.json
    print('PAGE DATA', request.json)
    print('REQUEST OBJECT', request)
    try:
        response_dict = get_comps(owner_data)
        logger(owner_data, 'get_comps')
        resp = jsonify({'request_status': time.time(),
        'response': response_dict})
    except Exception as e:
        resp = jsonify({'error': str(e)})
        logger(owner_data, 'get_comps', e)

    return resp


@application.route('/api_v1/submit2', methods=['POST'])
def handle_form2():
    #submit selected comps / finalize appeal / send to summary or complete page
    print('page 2 submit')
    comps_data = request.json
    try:
        response_dict = finalize_appeal(comps_data)
        logger(comps_data, 'submit')
        if comps_data['appeal_type'] == "detroit_single_family":
            return send_file(response_dict['file_stream'], as_attachment=True, attachment_filename='%s-appeal.docx' % comps_data['name'].lower().replace(' ', '-'))
        elif comps_data['appeal_type'] == "cook_county_single_family": #temp serve file
            return send_file(response_dict['file_stream'], as_attachment=True, attachment_filename='%s-appeal.docx' % comps_data['name'].lower().replace(' ', '-'))
        resp = jsonify({'request_status': time.time(),
        'response': response_dict})
    except Exception as e:
        resp = jsonify({'error': str(e)})
        logger(comps_data, 'submit', e)

    return resp


def logger(form_data, process_step_id, exception=''):
    if process_step_id == 'address_finder': #give uuid
        uuid_val = uuid.uuid4().urn[9:]
        record_log(uuid_val, process_step_id, exception, form_data)
        return uuid_val
    elif 'uuid' in form_data: #if uuid given
        record_log(form_data['uuid'], process_step_id, exception, form_data)
    else: #missing
        record_log('missing', process_step_id, exception, form_data)
    return

def get_pin(form_data):
    '''
    Input:
    {
        st_num : 'num' #street number,
        st_name : 'str' #street name/rest of address
    }
    Output:
    {
        candidates: [{'address':val,'parcel_num':val},{}]
    }
    '''
    cutoff_info = {
        'detroit': 100000,
        'cook': 250000
    }

    return address_candidates(form_data, cutoff_info)


def get_comps(form_data):
    """     
    Output:
    {
        target_pin : [{char1:val1,...}],
        comparables : [{char1:val1,...},{char1:val1,...}] #sorted by best to worst
        labeled_headers : [h1, h2, ...] #headers sorted in display order
        prop_info: 'str' #a string of info to display
    }
    """
    return process_input(form_data)

def finalize_appeal(form_data):
    '''
    Input:
    {
        'target_pin': [{}],
        'comparables': [{},{},{},{}]
        'appeal_type': '', 
        'pin': '', 
        'name': '', 
        'email': '', 
        'address': '', 
        'phone': '', 
        'city': '', 
        'state': '',
        'zip': '',
        'preferred: ''
    }
       
    Output:
    {
        success: bool,
        contention_value: val,
        message: txt
    }
    '''
    return process_comps_input(form_data)