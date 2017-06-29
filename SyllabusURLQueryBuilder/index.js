class SyllabusURLQueryBuilder {

  mapReduceURL = (expectedParams, params) => {
    let firstParam = true
    let paramsArray = Object.keys(params)

    paramsArray.forEach((param) => {
      if (expectedParams.indexOf(param) === -1) {
        throw new Error("Whoops! " + param + " is not expected param for this query.");
      }
    })

    return paramsArray.map((param) => {
      if (firstParam) {
        firstParam = false
        return param + "=[" + params[param].toString() + "]"
      } else
        return "&" + param + "=[" + params[param].toString() + "]"
    }).reduce(function(lastValue, currentValue) {
      return lastValue + currentValue
    }, "")
  }

  getQueryUrlTitleResultsListParams = (url, params) => {
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

  getQueryUrlAuthorResultsListParams = (url, params) => {
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

  getQueryUrlInstitutionResultsListParams = (url, params) => {
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

  getQueryUrlPublisherResultsListParams = (url, params) => {
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

  getQueryUrlFieldResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "countries",
      "query"
    ]

    url += "/v1/fields.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  getQueryUrlCountryResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "fields",
      "query"
    ]

    url += "/v1/countries.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  getQueryUrlFullTextResultsListParams = (url, params) => {
    let expectedParams = ["query"]

    url += "/v1/full-text.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  getQueryUrlInstructorResultsListParams = (url, params) => {
    let expectedParams = ["query"]

    url += "/v1/instructor-email.json"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  getQueryUrlTitleResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/works/" + _id + ".json"
  }
  getQueryUrlAuthorResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/authors/" + _id + ".json"
  }
  getQueryUrlFieldResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/fields/" + _id + ".json"
  }
  getQueryUrlInstitutionResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/schools/" + _id + ".json"
  }
  getQueryUrlCountryResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/countries/" + _id + ".json"
  }
  getQueryUrlPublisherResult(url, _id) {
    if (typeof _id === 'undefined' || _id == null) throw new Error("Whoops! id is expected param for this query.")
    return url + "/v1/publishers/" + _id + ".json"
  }
}

export let syllabusURLQueryBuilder = new SyllabusURLQueryBuilder()
