import {
  syllabusURLQueryBuilder
} from '../SyllabusURLQueryBuilder'
import axios from 'axios'
import {
  settledGetTitleResultsListPromise,
  settledGetTitleResultPromise,
  settledGetAuthorResultsListPromise,
  settledGetInstructorResultsListPromise,
  settledGetFullTextResultsListPromise,
  settledGetAuthorResultPromise
} from './apiMock'
import {
  env
} from '../.env'

class SyllabusEduPortalHTTPService {

  constructor(HOST, PORT, REQUEST_DEV_TIMMING, SERVER_ENV, REJECTED_PROMISE_ERROR, REJECTED_PROMISE) {
    this.REQUEST_DEV_TIMMING = REQUEST_DEV_TIMMING
    this.BASE_URL = HOST + ':' + PORT
    this.SERVER_ENV = SERVER_ENV
    this.REJECTED_PROMISE_ERROR = REJECTED_PROMISE_ERROR
    this.REJECTED_PROMISE = REJECTED_PROMISE
    console.log("BASE_URL:" + this.BASE_URL)
    console.log("REQUEST_DEV_TIMMING:" + this.REQUEST_DEV_TIMMING)
    console.log("SERVER_ENV:" + this.SERVER_ENV)
    console.log("REJECTED_PROMISE_ERROR:" + this.REJECTED_PROMISE_ERROR)
    console.log("REJECTED_PROMISE:" + this.REJECTED_PROMISE)
  }

  getTitleResultsList = (params) => {
    let url = syllabusURLQueryBuilder.getQueryUrlTitleResultsListParams(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetTitleResultsListPromise) : axios.get(url)
  }

  getTitleResult = (_id) => {
    let url = syllabusURLQueryBuilder.getQueryUrlTitleResult(this.BASE_URL, _id)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetTitleResultPromise) : axios.get(url)
  }

  getAuthorResultsList = (params) => {
    let url = syllabusURLQueryBuilder.getQueryUrlAuthorResultsListParams(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetAuthorResultsListPromise) : axios.get(url)
  }

  getInstructorResultsList = (params) => {
    let url = syllabusURLQueryBuilder.getQueryUrlInstructorResultsListParams(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetInstructorResultsListPromise) : axios.get(url)
  }

  getFullTextResultsList = (params) => {
    let url = syllabusURLQueryBuilder.getQueryUrlFullTextResultsListParams(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetFullTextResultsListPromise) : axios.get(url)
  }

  getAuthorResult = (_id) => {
    let url = syllabusURLQueryBuilder.getQueryUrlAuthorResult(this.BASE_URL, _id)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)
    return (this.SERVER_ENV === "development") ? new Promise(settledGetAuthorResultPromise) : axios.get(url)
  }
}

/***********************/
/* Singleton exporting */
/***********************/

export let syllabusEduPortalHTTPService = new SyllabusEduPortalHTTPService(env.HOST, env.PORT, env.REQUEST_DEV_TIMMING, env.SERVER_ENV, env.REJECTED_PROMISE_ERROR, env.REJECTED_PROMISE)
