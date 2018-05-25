import axios from 'axios';
import {ROOT_URL} from './../actions/types';
import { setCookie, getCookie, removeCookie } from "./../lib/session";

const ins = axios.create();
ins.defaults.baseURL=`${ROOT_URL}`;
ins.defaults.headers.common['Accept'] = 'application/json';
ins.defaults.headers.common['Content-Type'] = 'application/json';
ins.defaults.timeout = 2500;

export default ins;