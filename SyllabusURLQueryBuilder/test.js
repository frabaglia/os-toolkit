import {
  syllabusURLQueryBuilder
} from '.'

import {
  titleParams,
  authorParams,
  institutionParams,
  publisherParams,
  fieldParams,
  countryParams,
  fullTextParams,
  instructorParams,
  titleResultId,
  authorResultId,
  fieldResultId,
  institutionResultId,
  countryResultId,
  publisherResultId
} from './params'

describe('SyllabusURLQueryBuilder works', () => {

  let configs = {
    HOST: "http://localhost",
    PORT: "4545"
  }

  test('getQueryUrlTitleResultsListParams', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlTitleResultsListParams(configs.HOST + ':' + configs.PORT, titleParams)).toEqual("http://localhost:4545/v1/works.json?pages=[1]&pub_year_start=[1]&pub_year_end=[2]&class_year_start=[3]&class_year_end=[4]&open_access=[true]&inst_type=[1]&authors=[2,3]&schools=[3]&fields=[4]&countries=[5]&us_state=[Testing]&query=[Testing]")
  })

  test('getQueryUrlAuthorResultsListParams', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlAuthorResultsListParams(configs.HOST + ':' + configs.PORT, authorParams)).toEqual("http://localhost:4545/v1/authors.json?pages=[1]&schools=[1,2]&fields=[1]&countries=[1]&query=[Testing]")
  })

  test('getQueryUrlInstitutionResultsListParams', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlInstitutionResultsListParams(configs.HOST + ':' + configs.PORT, institutionParams)).toEqual("http://localhost:4545/v1/schools.json?pages=[1]&fields=[1,2]&countries=[1]&query=[Testing]")
  })

  test('getQueryUrlPublisherResultsListParams', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlPublisherResultsListParams(configs.HOST + ':' + configs.PORT, publisherParams)).toEqual("http://localhost:4545/v1/publishers.json?pages=[1]&pub_year_start=[1]&pub_year_end=[1]&class_year_start=[1]&class_year_end=[1]&fields=[1,2]&countries=[1]&query=[Testing]")
  })

  test('getQueryUrlFieldResultsListParams', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlFieldResultsListParams(configs.HOST + ':' + configs.PORT, fieldParams)).toEqual("http://localhost:4545/v1/fields.json?pages=[1]&countries=[1,2]&query=[Testing]")
  })

  test('getQueryUrlCountryResultsListParams', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlCountryResultsListParams(configs.HOST + ':' + configs.PORT, countryParams)).toEqual("http://localhost:4545/v1/countries.json?pages=[1]&fields=[1,2]&query=[Testing]")
  })

  test('getQueryUrlFullTextResultsListParams', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlFullTextResultsListParams(configs.HOST + ':' + configs.PORT, fullTextParams)).toEqual("http://localhost:4545/v1/full-text.json?query=[Testing]")
  })

  test('getQueryUrlInstructorResultsListParams', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlInstructorResultsListParams(configs.HOST + ':' + configs.PORT, instructorParams)).toEqual("http://localhost:4545/v1/instructor-email.json?query=[Testing]")
  })

  test('getQueryUrlTitleResult', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlTitleResult(configs.HOST + ':' + configs.PORT, titleResultId)).toEqual('http://localhost:4545/v1/works/1.json')
  })

  test('getQueryUrlAuthorResult', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlAuthorResult(configs.HOST + ':' + configs.PORT, authorResultId)).toEqual('http://localhost:4545/v1/authors/1.json')
  })

  test('getQueryUrlFieldResult', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlFieldResult(configs.HOST + ':' + configs.PORT, fieldResultId)).toEqual('http://localhost:4545/v1/fields/1.json')
  })

  test('getQueryUrlInstitutionResult', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlInstitutionResult(configs.HOST + ':' + configs.PORT, institutionResultId)).toEqual('http://localhost:4545/v1/schools/1.json')
  })

  test('getQueryUrlCountryResult', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlCountryResult(configs.HOST + ':' + configs.PORT, countryResultId)).toEqual('http://localhost:4545/v1/countries/1.json')
  })

  test('getQueryUrlPublisherResult', () => {
    expect(syllabusURLQueryBuilder.getQueryUrlPublisherResult(configs.HOST + ':' + configs.PORT, publisherResultId)).toEqual('http://localhost:4545/v1/publishers/1.json')
  })

})
