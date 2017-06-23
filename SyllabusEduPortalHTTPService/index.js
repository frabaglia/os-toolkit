import {
  syllabusURLQueryBuilder
} from '../SyllabusURLQueryBuilder/component'
import axios from 'axios'
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

  getInstructorResultsList = (params) => {
    let url = syllabusURLQueryBuilder.addUrlInstructorResultsListParams(this.BASE_URL + "/api/instructor-email", params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetInstructorResultsListPromise) : axios.get(url)
  }

  getFullTextResultsList = (params) => {
    let url = syllabusURLQueryBuilder.addUrlFullTextResultsListParams(this.BASE_URL + "/api/full-text", params)

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetFullTextResultsListPromise) : axios.get(url)
  }

  getAuthorResult = (_id) => {
    let url = this.BASE_URL + "/api/authors" + _id

    console.log("Creating HTTP request action: " + url)

    return (this.SERVER_ENV !== "development") ? new Promise(this.settledGetAuthorResultPromise) : axios.get(url)
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
  settledGetInstructorResultsListPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultWrapperSimulator({
            "TODO": "EDIT"
          })
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }

  settledGetFullTextResultsListPromise = (resolve, reject) => {
    if (true) {

      var tid = setTimeout(() => {
        clearInterval(tid)
        resolve(
          httpResultWrapperSimulator({
            "TODO": "EDIT"
          })
        )
      }, process.env.REQUEST_DEV_TIMMING)
    } else {
      reject(DEV_ERROR)
    }
  }
}

/***********************/
/* Singleton exporting */
/***********************/

export let syllabusExplorerHTTPService = new SyllabusExplorerHTTPService(process.env.HOST, process.env.PORT, process.env.REQUEST_DEV_TIMMING)
