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
  publisherResultId,
  landingUniversityParams,
  landingUniversityFieldParams
} from './params'

describe('SyllabusURLQueryBuilder works', () => {

  let configs = {
    HOST: "http://localhost",
    PORT: "4545"
  }

  test('setQueryUrlTitleResultsListParams', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlTitleResultsListParams(configs.HOST + ':' + configs.PORT, titleParams)).toEqual("http://localhost:4545/v1/works.json?pages=1&pub_year_start=1&pub_year_end=2&class_year_start=3&class_year_end=4&open_access=true&inst_type=1&authors=[2,3]&schools=[3]&fields=[4]&countries=[1]&us_state=Testing&query=Testing")
  })

  test('setQueryUrlLandingUniversity', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlLandingUniversity(configs.HOST + ':' + configs.PORT, landingUniversityParams)).toEqual("http://localhost:4545/v1/university.json?years=[1990,1999]")
  })

  test('setQueryUrlLandingUniversityField', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlLandingUniversityField(configs.HOST + ':' + configs.PORT, landingUniversityFieldParams)).toEqual("http://localhost:4545/v1/university/field.json?years=[1990,1999]&own_selection=true")
  })

  test('setQueryUrlLandingUniversityFieldYear', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlLandingUniversityFieldYear(configs.HOST + ':' + configs.PORT, {})).toEqual("http://localhost:4545/v1/university/field/year.json?")
  })

  test('setQueryUrlAuthorResultsListParams', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlAuthorResultsListParams(configs.HOST + ':' + configs.PORT, authorParams)).toEqual("http://localhost:4545/v1/authors.json?pages=1&schools=[1,2]&fields=[1]&countries=[1]&query=Testing")
  })

  test('setQueryUrlInstitutionResultsListParams', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlInstitutionResultsListParams(configs.HOST + ':' + configs.PORT, institutionParams)).toEqual("http://localhost:4545/v1/schools.json?pages=1&fields=[1,2]&countries=[1]&query=Testing")
  })

  test('setQueryUrlPublisherResultsListParams', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlPublisherResultsListParams(configs.HOST + ':' + configs.PORT, publisherParams)).toEqual("http://localhost:4545/v1/publishers.json?pages=1&pub_year_start=1&pub_year_end=1&class_year_start=1&class_year_end=1&fields=[1,2]&countries=[1]&query=Testing")
  })

  test('setQueryUrlFieldResultsListParams', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlFieldResultsListParams(configs.HOST + ':' + configs.PORT, fieldParams)).toEqual("http://localhost:4545/v1/fields.json?pages=1&countries=[1,2]&query=Testing")
  })

  test('setQueryUrlCountryResultsListParams', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlCountryResultsListParams(configs.HOST + ':' + configs.PORT, countryParams)).toEqual("http://localhost:4545/v1/countries.json?pages=1&fields=[1,2]&query=Testing")
  })

  test('setQueryUrlFullTextResultsListParams', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlFullTextResultsListParams(configs.HOST + ':' + configs.PORT, fullTextParams)).toEqual("http://localhost:4545/v1/full-text.json?query=Testing")
  })

  test('setQueryUrlInstructorResultsListParams', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlInstructorResultsListParams(configs.HOST + ':' + configs.PORT, instructorParams)).toEqual("http://localhost:4545/v1/instructor-email.json?query=Testing")
  })

  test('setQueryUrlTitleResult', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlTitleResult(configs.HOST + ':' + configs.PORT, titleResultId)).toEqual('http://localhost:4545/v1/works/1.json')
  })

  test('setQueryUrlAuthorResult', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlAuthorResult(configs.HOST + ':' + configs.PORT, authorResultId)).toEqual('http://localhost:4545/v1/authors/1.json')
  })

  test('setQueryUrlFieldResult', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlFieldResult(configs.HOST + ':' + configs.PORT, fieldResultId)).toEqual('http://localhost:4545/v1/fields/1.json')
  })

  test('setQueryUrlInstitutionResult', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlInstitutionResult(configs.HOST + ':' + configs.PORT, institutionResultId)).toEqual('http://localhost:4545/v1/schools/1.json')
  })

  test('setQueryUrlCountryResult', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlCountryResult(configs.HOST + ':' + configs.PORT, countryResultId)).toEqual('http://localhost:4545/v1/countries/1.json')
  })

  test('setQueryUrlPublisherResult', () => {
    expect(syllabusURLQueryBuilder.setQueryUrlPublisherResult(configs.HOST + ':' + configs.PORT, publisherResultId)).toEqual('http://localhost:4545/v1/publishers/1.json')
  })

})
