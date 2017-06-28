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
    })
  }

  addUrlTitleResultsListParams = (url, params) => {
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

    url += "/v1/works"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  addUrlAuthorResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "schools",
      "fields",
      "countries",
      "query"
    ]

    url += "/v1/authors"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  addUrlInstitutionResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "fields",
      "countries",
      "query"
    ]
    url += "/v1/schools"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  addUrlPublisherResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "pub_year_start",
      "pub_year_end",
      "class_year_start",
      "class_year_end",
      "fields",
      "countries",
      "query"
    ]

    url += "/v1/publishers"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  addUrlFieldResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "countries",
      "query"
    ]

    url += "/v1/fields"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  addUrlCountryResultsListParams = (url, params) => {
    let expectedParams = ["pages",
      "fields",
      "query"
    ]

    url += "/v1/countries"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  addUrlFullTextResultsListParams = (url, params) => {
    let expectedParams = ["query"]

    url += "/v1/full-text"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }

  addUrlInstructorResultsListParams = (url, params) => {
    let expectedParams = ["query"]

    url += "/v1/instructor-email"
    url += "?"
    url += this.mapReduceURL(expectedParams, params)

    return url
  }
}

export let syllabusURLQueryBuilder = new SyllabusURLQueryBuilder()
