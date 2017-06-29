import {
  httpResultWrapperSimulator,
  httpResultsListWrapperSimulator
} from '../HTTP'

import {
  TYPE_TITLE,
  TYPE_AUTHOR,
  TYPE_INSTITUTION,
  TYPE_FIELD,
  TYPE_COUNTRY,
  TYPE_PUBLISHER
} from '../../constants/explorer/store-types'

import store from '../../store/index'

/* RESULTS LIST */

export let settledGetTitleResultsListPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetAuthorResultsListPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetInstitutionResultsListPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetPublisherResultsListPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetFieldResultsListPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetCountryResultsListPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

/* RESULTS */

export let settledGetTitleResultPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetAuthorResultPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetInstitutionResultPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetInstitutionFieldResultPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator({
          "name": "Yale University",
          "field": "History",
          "country": "USA",
          "rank": 1,
          "syllabus_count": 20000,
        })
      )
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetPublisherResultPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetFieldResultPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator({
          "name": "History",
          "rank": 1,
          "syllabus_count": 20000,
        })
      )
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetCountryResultPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

/* MOST FRECUENT */

export let settledGetMostFrecuentTitlesPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetMostFrecuentAuthorsPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetMostFrecuentInstitutionsPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetMostFrecuentPublishersPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetMostFrecuentFieldsPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetMostFrecuentCountriesPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

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
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

/******************************* LOCAL STORAGE **********************************/

/* MOST FRECUENT */

export let settledGetLSMostFrecuentTitlesPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_TITLE, 'data']))
      )
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetLSMostFrecuentAuthorsPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_AUTHOR, 'data']))
      )
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetLSMostFrecuentInstitutionsPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_INSTITUTION, 'data']))
      )
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetLSMostFrecuentPublishersPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_PUBLISHER, 'data']))
      )
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetLSMostFrecuentFieldsPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_FIELD, 'data']))
      )
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetLSMostFrecuentCountriesPromise = (resolve, reject) => {
  if (!this.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_COUNTRY, 'data']))
      )
    }, this.REQUEST_DEV_TIMMING)
  } else {
    reject(this.REJECTED_PROMISE_ERROR)
  }
}
