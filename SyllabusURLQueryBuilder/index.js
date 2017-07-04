class SyllabusURLQueryBuilder {

  // recives
  // @ expectedParams - this array contains every availiable key on this query for validation.
  // @ params - every {key: value} is used as inputs for the desired query .
  mapReduceURL = (expectedParams, params) => {
    let firstParam = true
    let paramsArray = Object.keys(params)

    /* Every element of this array is not wrapped by brackets [ ] on the query */
    let isNonArrayType = [
      "query",
      "pages",
      "pub_year_start",
      "pub_year_end",
      "class_year_start",
      "class_year_end",
      "open_access",
      "inst_type",
      "us_state",
      "own_selection"
    ]

    paramsArray.forEach((param) => {
      if (!Array.isArray(params[param]) && isNonArrayType.indexOf(param) === -1) {
        throw new Error("Whoops! " + param + " is expected to be an Array.");
      }

      if (expectedParams.indexOf(param) === -1) {
        throw new Error("Whoops! " + param + " is not expected param for this query.");
      }
    })

    return paramsArray.map((param) => {

      if (isNonArrayType.indexOf(param) !== -1) {

        if (firstParam) {
          firstParam = false
          return param + "=" + params[param].toString()
        } else
          return "&" + param + "=" + params[param].toString()

      } else {

        if (firstParam) {
          firstParam = false
          return param + "=[" + params[param].toString() + "]"
        } else
          return "&" + param + "=[" + params[param].toString() + "]"

      }

    }).reduce((lastValue, currentValue) => {
      return lastValue + currentValue
    }, "")
  }

  setQueryUrlLandingUniversity = (url, params) => {
    let expectedParams = [
      "years"
    ]

    url += "/v1/university.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url

  }
  setQueryUrlLandingUniversityField = (url, params) => {
    let expectedParams = [
      "years",
      "own_selection"
    ]

    url += "/v1/university/field.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url

  }
  setQueryUrlLandingUniversityFieldYear = (url, params) => {
    let expectedParams = []

    url += "/v1/university/field/year.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url

  }

  setQueryUrlTitleResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "pub_year_start",
      "pub_year_end",
      "class_year_start",
      "class_year_end",
      "open_access",
      "inst_type",
      "authors",
      "schools",
      "fields",
      "countries",
      "us_state",
      "query"
    ]

    url += "/v1/works.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  setQueryUrlAuthorResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "schools",
      "fields",
      "countries",
      "query"
    ]

    url += "/v1/authors.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  setQueryUrlInstitutionResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "fields",
      "countries",
      "query"
    ]
    url += "/v1/schools.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  setQueryUrlPublisherResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "pub_year_start",
      "pub_year_end",
      "class_year_start",
      "class_year_end",
      "fields",
      "countries",
      "query"
    ]

    url += "/v1/publishers.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  setQueryUrlFieldResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "countries",
      "query"
    ]

    url += "/v1/fields.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  setQueryUrlCountryResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "fields",
      "query"
    ]

    url += "/v1/countries.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  setQueryUrlFullTextResultsListParams = (url, params) => {
    let expectedParams = ["query"]

    url += "/v1/full-text.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  setQueryUrlInstructorResultsListParams = (url, params) => {
    let expectedParams = ["query"]

    url += "/v1/instructor-email.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  setQueryUrlTitleResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/works/" + _id + ".json"
  }
  setQueryUrlAuthorResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/authors/" + _id + ".json"
  }
  setQueryUrlFieldResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/fields/" + _id + ".json"
  }
  setQueryUrlInstitutionResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/schools/" + _id + ".json"
  }
  setQueryUrlCountryResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/countries/" + _id + ".json"
  }
  setQueryUrlPublisherResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/publishers/" + _id + ".json"
  }
}

export let syllabusURLQueryBuilder = new SyllabusURLQueryBuilder()
