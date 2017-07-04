import {
  syllabusURLQueryBuilder
} from '../SyllabusURLQueryBuilder'
import axios from 'axios'
import store from '../../store/index'
import {
  TYPE_TITLE,
  TYPE_AUTHOR,
  TYPE_INSTITUTION,
  TYPE_FIELD,
  TYPE_COUNTRY,
  TYPE_PUBLISHER
} from '../../constants/explorer/store-types'
import {
  isStoredDataUpToDate
} from '../Date/component'
import{
  settledGetTitleResultsListPromise,
  settledGetAuthorResultsListPromise,
  settledGetInstitutionResultsListPromise,
  settledGetPublisherResultsListPromise,
  settledGetFieldResultsListPromise,
  settledGetCountryResultsListPromise,
  settledGetTitleResultPromise,
  settledGetAuthorResultPromise,
  settledGetInstitutionResultPromise,
  settledGetInstitutionFieldResultPromise,
  settledGetPublisherResultPromise,
  settledGetFieldResultPromise,
  settledGetCountryResultPromise,
  settledGetMostFrecuentTitlesPromise,
  settledGetMostFrecuentAuthorsPromise,
  settledGetMostFrecuentInstitutionsPromise,
  settledGetMostFrecuentPublishersPromise,
  settledGetMostFrecuentFieldsPromise,
  settledGetMostFrecuentCountriesPromise,
  settledGetLSMostFrecuentTitlesPromise,
  settledGetLSMostFrecuentAuthorsPromise,
  settledGetLSMostFrecuentInstitutionsPromise,
  settledGetLSMostFrecuentPublishersPromise,
  settledGetLSMostFrecuentFieldsPromise,
  settledGetLSMostFrecuentCountriesPromise
} from './apiMock'
import {
  env
} from '../.env'

class SyllabusExplorerHTTPService {

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
    let url = syllabusURLQueryBuilder.setQueryUrlTitleResultsListParams(this.BASE_URL, params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetTitleResultsListPromise) : axios.get(url)
  }

  getTitleResult = (_id) => {
    let url = syllabusURLQueryBuilder.setQueryUrlTitleResult(this.BASE_URL, _id)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetTitleResultPromise) : axios.get(url)
  }

  getAuthorResultsList = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlAuthorResultsListParams(this.BASE_URL, params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetAuthorResultsListPromise) : axios.get(url)
  }

  getAuthorResult = (_id) => {
    let url = syllabusURLQueryBuilder.setQueryUrlAuthorResult(this.BASE_URL, _id)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetAuthorResultPromise) : axios.get(url)
  }

  getFieldResultsList = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlFieldResultsListParams(this.BASE_URL, params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetFieldResultsListPromise) : axios.get(url)
  }

  getFieldResult = (_id) => {
    let url = syllabusURLQueryBuilder.setQueryUrlFieldResult(this.BASE_URL, _id)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetFieldResultPromise) : axios.get(url)
  }

  getInstitutionResultsList = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlInstitutionResultsListParams(this.BASE_URL, params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetInstitutionResultsListPromise) : axios.get(url)
  }

  getInstitutionResult = (_id) => {
    let url = syllabusURLQueryBuilder.setQueryUrlInstitutionResult(this.BASE_URL, _id)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetInstitutionResultPromise) : axios.get(url)
  }

  getCountryResultsList = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlCountryResultsListParams(this.BASE_URL, params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetCountryResultsListPromise) : axios.get(url)
  }

  getCountryResult = (_id) => {
    let url = syllabusURLQueryBuilder.setQueryUrlCountryResult(this.BASE_URL, _id)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetCountryResultPromise) : axios.get(url)
  }

  getPublisherResultsList = (params) => {
    let url = syllabusURLQueryBuilder.setQueryUrlPublisherResultsListParams(this.BASE_URL, params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetPublisherResultsListPromise) : axios.get(url)
  }

  getPublisherResult = (_id) => {
    let url = syllabusURLQueryBuilder.setQueryUrlPublisherResult(this.BASE_URL, _id)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetPublisherResultPromise) : axios.get(url)
  }

  /* Most frequent */

  getMostFrecuentTitles = () => {
    let url = this.BASE_URL + "/api/most-frecuent/texts"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_TITLE, 'updatedAt'])))
      return new Promise(settledGetLSMostFrecuentTitlesPromise)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetMostFrecuentTitlesPromise) : axios.get(url)
  }

  getMostFrecuentAuthors = () => {
    let url = this.BASE_URL + "/api/most-frecuent/authors"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_AUTHOR, 'updatedAt'])))
      return new Promise(settledGetLSMostFrecuentAuthorsPromise)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetMostFrecuentAuthorsPromise) : axios.get(url)
  }

  getMostFrecuentFields = () => {
    let url = this.BASE_URL + "/api/most-frecuent/fields"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_FIELD, 'updatedAt'])))
      return new Promise(settledGetLSMostFrecuentFieldsPromise)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetMostFrecuentFieldsPromise) : axios.get(url)
  }

  getMostFrecuentInstitutions = () => {
    let url = this.BASE_URL + "/api/most-frecuent/institutions"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_INSTITUTION, 'updatedAt'])))
      return new Promise(settledGetLSMostFrecuentInstitutionsPromise)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetMostFrecuentInstitutionsPromise) : axios.get(url)
  }

  getMostFrecuentCountries = () => {
    let url = this.BASE_URL + "/api/most-frecuent/countries"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_COUNTRY, 'updatedAt'])))
      return new Promise(settledGetLSMostFrecuentCountriesPromise)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetMostFrecuentCountriesPromise) : axios.get(url)
  }

  getMostFrecuentPublishers = () => {
    let url = this.BASE_URL + "/api/most-frecuent/publishers"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_PUBLISHER, 'updatedAt'])))
      return new Promise(settledGetLSMostFrecuentPublishersPromise)

    return (this.SERVER_ENV === "development") ? new Promise(settledGetMostFrecuentPublishersPromise) : axios.get(url)
  }

  isStoredDataUpToDate = isStoredDataUpToDate
}

/***********************/
/* Singleton exporting */
/***********************/

export let syllabusExplorerHTTPService = new SyllabusExplorerHTTPService(env.HOST, env.PORT, env.REQUEST_DEV_TIMMING, env.SERVER_ENV, env.REJECTED_PROMISE_ERROR, env.REJECTED_PROMISE)
