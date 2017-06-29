import {
  httpResultWrapperSimulator,
  httpResultsListWrapperSimulator
} from '../HTTP'

import {
  env
} from '../.env'

export let settledGetTitleResultsListPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

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
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetAuthorResultsListPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

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
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}

/* RESULTS */

export let settledGetTitleResultPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

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
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetAuthorResultPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

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
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}
export let settledGetInstructorResultsListPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator({
          "TODO": "EDIT"
        })
      )
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetFullTextResultsListPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator({
          "TODO": "EDIT"
        })
      )
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}
