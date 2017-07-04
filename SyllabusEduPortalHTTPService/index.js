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
  settledGetAuthorResultPromise,
  settledGetLandingUniversityPromise,
  settledGetLandingUniversityFieldPromise,
  settledGetLandingUniversityFieldYearPromise
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

  /* University Landing */

  //TODO: TEST
  getLandingUniversity = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlLandingUniversity(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetLandingUniversityPromise) : axios.get(url)
  }
  //TODO: TEST
  getLandingUniversityFieldRequest = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlLandingUniversityField(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetLandingUniversityFieldPromise) : axios.get(url)
  }
  //TODO: TEST
  getLandingUniversityFieldYearRequest = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlLandingUniversityFieldYear(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetLandingUniversityFieldYearPromise) : axios.get(url)
  }

  /* Results list */

  getTitleResultsList = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlTitleResultsListParams(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetTitleResultsListPromise) : axios.get(url)
  }

  getTitleResult = (_id) => {
    let url = syllabusURLQueryBuilder.setQueryUrlTitleResult(this.BASE_URL, _id)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetTitleResultPromise) : axios.get(url)
  }

  getAuthorResultsList = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlAuthorResultsListParams(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetAuthorResultsListPromise) : axios.get(url)
  }

  getInstructorResultsList = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlInstructorResultsListParams(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetInstructorResultsListPromise) : axios.get(url)
  }

  getFullTextResultsList = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlFullTextResultsListParams(this.BASE_URL, params)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetFullTextResultsListPromise) : axios.get(url)
  }

  getAuthorResult = (_id) => {
    let url = syllabusURLQueryBuilder.setQueryUrlAuthorResult(this.BASE_URL, _id)

    console.log("Creating SyllabusEduPortalHTTPService request action: " + url)
    return (this.SERVER_ENV === "development") ? new Promise(settledGetAuthorResultPromise) : axios.get(url)
  }
}

/***********************/
/* Singleton exporting */
/***********************/

export let syllabusEduPortalHTTPService = new SyllabusEduPortalHTTPService(env.HOST, env.PORT, env.REQUEST_DEV_TIMMING, env.SERVER_ENV, env.REJECTED_PROMISE_ERROR, env.REJECTED_PROMISE)
