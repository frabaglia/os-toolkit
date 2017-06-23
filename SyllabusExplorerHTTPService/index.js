import {
  syllabusURLQueryBuilder
} from '../SyllabusURLQueryBuilder/component'
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
import {
  httpResultWrapperSimulator,
  httpResultsListWrapperSimulator
} from '../HTTP'
require('dotenv').config()

const DEV_ERROR = "Simulated development error."

class SyllabusExplorerHTTPService {

  constructor(HOST, PORT, REQUEST_DEV_TIMMING) {
    console.log("Creating SyllabusHTTPService...")
    console.log("Getting enviroment configurations...")
    console.log(JSON.stringify(process.env))
    this.REQUEST_DEV_TIMMING = process.env.REQUEST_DEV_TIMMING
    this.BASE_URL = process.env.HOST + ':' + process.env.PORT
    this.SERVER_ENV = process.env.SERVER_ENV
    console.log("BASE_URL:" + this.BASE_URL)
    console.log("REQUEST_DEV_TIMMING:" + process.env.REQUEST_DEV_TIMMING)
    console.log("SERVER_ENV:" + process.env.SERVER_ENV)
  }

  getTitleResultsList = (params) => {
    let url = syllabusURLQueryBuilder.addUrlTitleResultsListParams(this.BASE_URL + "/api/texts", params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetTitleResultsListPromise) : axios.get(url)
  }

  getTitleResult = (_id) => {
    let url = this.BASE_URL + "/api/texts" + _id

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetTitleResultPromise) : axios.get(url)
  }

  getAuthorResultsList = (params) => {
    let url = syllabusURLQueryBuilder.addUrlAuthorResultsListParams(this.BASE_URL + "/api/authors", params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetAuthorResultsListPromise) : axios.get(url)
  }

  getAuthorResult = (_id) => {
    let url = this.BASE_URL + "/api/authors" + _id

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetAuthorResultPromise) : axios.get(url)
  }

  getFieldResultsList = (params) => {
    let url = syllabusURLQueryBuilder.addUrlFieldResultsListParams(this.BASE_URL + "/api/fields", params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetFieldResultsListPromise) : axios.get(url)
  }

  getFieldResult = (_id) => {
    let url = this.BASE_URL + "/api/fields" + _id

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetFieldResultPromise) : axios.get(url)
  }

  getInstitutionResultsList = (params) => {
    let url = syllabusURLQueryBuilder.addUrlInstitutionResultsListParams(this.BASE_URL + "/api/institutions", params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetInstitutionResultsListPromise) : axios.get(url)
  }

  getInstitutionResult = (_id) => {
    //TODO: Query builder add
    let url = this.BASE_URL + "/api/institutions" + _id

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetInstitutionResultPromise) : axios.get(url)
  }

  //DEPRECATED -  This method will be totally removed in next versions.
  // getInstitutionFieldResult = (_id) => {
  //
  //   let url = this.BASE_URL + "/api/institutions-field" + _id
  //
  //   console.log("Creating HTTP request action: " + url)
  //
  //   return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetInstitutionFieldResultPromise) : axios.get(url)
  // }

  getCountryResultsList = (params) => {
    let url = syllabusURLQueryBuilder.addUrlCountryResultsListParams(this.BASE_URL + "/api/countries", params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetCountryResultsListPromise) : axios.get(url)
  }

  getCountryResult = (_id) => {
    let url = this.BASE_URL + "/api/countries" + _id

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetCountryResultPromise) : axios.get(url)
  }

  getPublisherResultsList = (params) => {
    let url = syllabusURLQueryBuilder.addUrlPublisherResultsListParams(this.BASE_URL + "/api/publishers", params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetPublisherResultsListPromise) : axios.get(url)
  }

  getPublisherResult = (_id) => {
    let url = this.BASE_URL + "/api/publishers" + _id

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetPublisherResultPromise) : axios.get(url)
  }

  getMostFrecuentTitles = () => {
    let url = this.BASE_URL + "/api/most-frecuent/texts"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_TITLE, 'updatedAt'])))
      return new Promise(this.settledGetLSMostFrecuentTitlesPromise)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetMostFrecuentTitlesPromise) : axios.get(url)
  }

  getMostFrecuentAuthors = () => {
    let url = this.BASE_URL + "/api/most-frecuent/authors"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_AUTHOR, 'updatedAt'])))
      return new Promise(this.settledGetLSMostFrecuentAuthorsPromise)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetMostFrecuentAuthorsPromise) : axios.get(url)
  }

  getMostFrecuentFields = () => {
    let url = this.BASE_URL + "/api/most-frecuent/fields"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_FIELD, 'updatedAt'])))
      return new Promise(this.settledGetLSMostFrecuentFieldsPromise)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetMostFrecuentFieldsPromise) : axios.get(url)
  }

  getMostFrecuentInstitutions = () => {
    let url = this.BASE_URL + "/api/most-frecuent/institutions"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_INSTITUTION, 'updatedAt'])))
      return new Promise(this.settledGetLSMostFrecuentInstitutionsPromise)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetMostFrecuentInstitutionsPromise) : axios.get(url)
  }

  getMostFrecuentCountries = () => {
    let url = this.BASE_URL + "/api/most-frecuent/countries"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_COUNTRY, 'updatedAt'])))
      return new Promise(this.settledGetLSMostFrecuentCountriesPromise)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetMostFrecuentCountriesPromise) : axios.get(url)
  }

  getMostFrecuentPublishers = () => {
    let url = this.BASE_URL + "/api/most-frecuent/publishers"

    console.log("Creating HTTP request action: " + url)

    if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_PUBLISHER, 'updatedAt'])))
      return new Promise(this.settledGetLSMostFrecuentPublishersPromise)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetMostFrecuentPublishersPromise) : axios.get(url)
  }

  /* RESULTS LIST */

  settledGetTitleResultsListPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "title": "The Elements of Style",
            "pub_year": 1920,
            "rank": 1,
            "appearances": 3934,
            "score": 100.0,
            "author_first": "William",
            "author_middle": "A.",
            "author_last": "Strunk",
            "_id": 1
          }, {
            "title": "Biology",
            "pub_year": 1987,
            "rank": 2,
            "appearances": 3057,
            "score": 97.2,
            "author_first": "Neil",
            "author_middle": null,
            "author_last": "Cambell",
            "_id": 2
          }, {
            "title": "Frankenstein",
            "pub_year": 1818,
            "rank": 3,
            "appearances": 2320,
            "score": 95.0,
            "author_first": "Mary",
            "author_middle": "Wollstonecraft",
            "author_last": "Shelley",
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetAuthorResultsListPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name_first": "Mark",
            "name_middle": null,
            "name_last": "Twain",
            "rank": 1,
            "appearances": 4400,
            "text_count": 20,
            "_id": 1
          }, {
            "name_first": "Mary",
            "name_middle": "Wollstonecraft",
            "name_last": "Shelley",
            "rank": 2,
            "appearances": 2000,
            "text_count": 13,
            "_id": 2
          }, {
            "name_first": "William",
            "name_middle": "A.",
            "name_last": "Strunk",
            "rank": 3,
            "appearances": 1000,
            "text_count": 10,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetInstitutionResultsListPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name": "Yale University",
            "country": "USA",
            "rank": 1,
            "syllabus_count": 20000,
            "_id": 1
          }, {
            "name": "Stanford University",
            "country": "USA",
            "rank": 2,
            "syllabus_count": 19000,
            "_id": 2
          }, {
            "name": "Harvard University",
            "country": "USA",
            "rank": 3,
            "syllabus_count": 18000,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetPublisherResultsListPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name": "Elsevier",
            "rank": 1,
            "assignment_count": 125000,
            "text_count": 4500,
            "_id": 1
          }, {
            "name": "Cengage",
            "rank": 2,
            "assignment_count": 110000,
            "text_count": 3000,
            "_id": 2
          }, {
            "name": "MacMillan",
            "rank": 3,
            "assignment_count": 100000,
            "text_count": 2000,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetFieldResultsListPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name": "History",
            "rank": 1,
            "syllabus_count": 20000,
            "_id": 1
          }, {
            "name": "English",
            "rank": 2,
            "syllabus_count": 19000,
            "_id": 2
          }, {
            "name": "Computer Science",
            "rank": 3,
            "syllabus_count": 18000,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetCountryResultsListPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name": "United States",
            "rank": 1,
            "syllabus_count": 3000000,
            "inst_count": 3000,
            "_id": 1
          }, {
            "name": "Canada",
            "rank": 2,
            "syllabus_count": 2000000,
            "inst_count": 2000,
            "_id": 2
          }, {
            "name": "Australia",
            "rank": 3,
            "syllabus_count": 1000000,
            "inst_count": 1000,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  /* RESULTS */

  settledGetTitleResultPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultWrapperSimulator({
            "title": "The Elements of Style",
            "pub_year": 1920,
            "rank": 1,
            "appearances": 3934,
            "score": 100.0,
            "author_first": "William",
            "author_middle": "A.",
            "author_last": "Strunk",
          })
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetAuthorResultPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultWrapperSimulator({
            "name_first": "Mark",
            "name_middle": null,
            "name_last": "Twain",
            "rank": 1,
            "appearances": 4400,
            "text_count": 20,
          })
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetInstitutionResultPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultWrapperSimulator({
            "name": "Yale University",
            "country": "USA",
            "rank": 1,
            "syllabus_count": 20000,
          })
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetInstitutionFieldResultPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          this.httpWrapperSimulator({
            "name": "Yale University",
            "field": "History",
            "country": "USA",
            "rank": 1,
            "syllabus_count": 20000,
          })
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetPublisherResultPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultWrapperSimulator({
            "name": "Elsevier",
            "rank": 1,
            "assignment_count": 125000,
            "text_count": 4500,
          })
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetFieldResultPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultWrapperSimulator({
            "name": "History",
            "rank": 1,
            "syllabus_count": 20000,
          })
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetCountryResultPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultWrapperSimulator({
            "name": "United States",
            "rank": 1,
            "syllabus_count": 3000000,
            "inst_count": 3000,
          })
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  /* MOST FRECUENT */

  settledGetMostFrecuentTitlesPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "title": "The Elements of Style",
            "pub_year": 1920,
            "rank": 1,
            "appearances": 3934,
            "score": 100.0,
            "author_first": "William",
            "author_middle": "A.",
            "author_last": "Strunk",
            "_id": 1
          }, {
            "title": "Biology",
            "pub_year": 1987,
            "rank": 2,
            "appearances": 3057,
            "score": 97.2,
            "author_first": "Neil",
            "author_middle": null,
            "author_last": "Cambell",
            "_id": 2
          }, {
            "title": "Frankenstein",
            "pub_year": 1818,
            "rank": 3,
            "appearances": 2320,
            "score": 95.0,
            "author_first": "Mary",
            "author_middle": "Wollstonecraft",
            "author_last": "Shelley",
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetMostFrecuentAuthorsPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name_first": "Mark",
            "name_middle": null,
            "name_last": "Twain",
            "rank": 1,
            "appearances": 4400,
            "text_count": 20,
            "_id": 1
          }, {
            "name_first": "Mary",
            "name_middle": "Wollstonecraft",
            "name_last": "Shelley",
            "rank": 2,
            "appearances": 2000,
            "text_count": 13,
            "_id": 2
          }, {
            "name_first": "William",
            "name_middle": "A.",
            "name_last": "Strunk",
            "rank": 3,
            "appearances": 1000,
            "text_count": 10,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetMostFrecuentInstitutionsPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name": "Yale University",
            "country": "USA",
            "rank": 1,
            "syllabus_count": 20000,
            "_id": 1
          }, {
            "name": "Stanford University",
            "country": "USA",
            "rank": 2,
            "syllabus_count": 19000,
            "_id": 2
          }, {
            "name": "Harvard University",
            "country": "USA",
            "rank": 3,
            "syllabus_count": 18000,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetMostFrecuentPublishersPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name": "Elsevier",
            "rank": 1,
            "assignment_count": 125000,
            "text_count": 4500,
            "_id": 1
          }, {
            "name": "Cengage",
            "rank": 2,
            "assignment_count": 110000,
            "text_count": 3000,
            "_id": 2
          }, {
            "name": "MacMillan",
            "rank": 3,
            "assignment_count": 100000,
            "text_count": 2000,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetMostFrecuentFieldsPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name": "History",
            "rank": 1,
            "syllabus_count": 20000,
            "_id": 1
          }, {
            "name": "English",
            "rank": 2,
            "syllabus_count": 19000,
            "_id": 2
          }, {
            "name": "Computer Science",
            "rank": 3,
            "syllabus_count": 18000,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetMostFrecuentCountriesPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultsListWrapperSimulator([{
            "name": "United States",
            "rank": 1,
            "syllabus_count": 3000000,
            "inst_count": 3000,
            "_id": 1
          }, {
            "name": "Canada",
            "rank": 2,
            "syllabus_count": 2000000,
            "inst_count": 2000,
            "_id": 2
          }, {
            "name": "Australia",
            "rank": 3,
            "syllabus_count": 1000000,
            "inst_count": 1000,
            "_id": 3
          }])
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  /******************************* LOCAL STORAGE **********************************/

  /* MOST FRECUENT */

  settledGetLSMostFrecuentTitlesPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          this.httpWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_TITLE, 'data']))
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetLSMostFrecuentAuthorsPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          this.httpWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_AUTHOR, 'data']))
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetLSMostFrecuentInstitutionsPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          this.httpWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_INSTITUTION, 'data']))
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetLSMostFrecuentPublishersPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          this.httpWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_PUBLISHER, 'data']))
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetLSMostFrecuentFieldsPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          this.httpWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_FIELD, 'data']))
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetLSMostFrecuentCountriesPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          this.httpWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_COUNTRY, 'data']))
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  httpResultWrapperSimulator = (data) => {
    return {
      /* Taken from axios documentation: https://github.com/mzabriskie/axios#response-schema */
      data: data,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {}
    }
  }

  httpResultsListWrapperSimulator = (data) => {
    return {
      data: {
        hits: [data, data]
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {}
    }
  }

  isStoredDataUpToDate = isStoredDataUpToDate
}

/***********************/
/* Singleton exporting */
/***********************/

export let syllabusExplorerHTTPService = new SyllabusExplorerHTTPService(process.env.HOST, process.env.PORT, process.env.REQUEST_DEV_TIMMING)
