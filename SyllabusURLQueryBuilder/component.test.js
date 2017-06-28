import {
  syllabusURLQueryBuilder
} from './component'
import {
  titleParams,
  authorParams,
  institutionParams,
  publisherParams,
  fieldParams,
  countryParams,
  fullTextParams,
  instructorParams
} from './params'

describe('Query builder works', () => {

  let configs = {
    HOST: "http://localhost",
    PORT: "4545"
  }

  test('addUrlTitleResultsListParams', () => {
    expect(syllabusURLQueryBuilder.addUrlTitleResultsListParams(configs.HOST + ':' + configs.PORT, titleParams)).toEqual("http://localhost:4545/v1/works?pages=[1]&pub_year_start=[1]&pub_year_end=[2]&class_year_start=[3]&class_year_end=[4]&open_access=[true]&inst_type=[1]&authors=[2,3]&schools=[3]&fields=[4]&countries=[5]&us_state=[Testing]&query=[Testing]")
  })

  test('addUrlAuthorResultsListParams', () => {
    expect(syllabusURLQueryBuilder.addUrlAuthorResultsListParams(configs.HOST + ':' + configs.PORT, authorParams)).toEqual("http://localhost:4545/v1/authors?pages=[1]&schools=[1,2]&fields=[1]&countries=[1]&query=[Testing]")
  })

  test('addUrlInstitutionResultsListParams', () => {
    expect(syllabusURLQueryBuilder.addUrlInstitutionResultsListParams(configs.HOST + ':' + configs.PORT, institutionParams)).toEqual("http://localhost:4545/v1/schools?pages=[1]&fields=[1,2]&countries=[1]&query=[Testing]")
  })

  test('addUrlPublisherResultsListParams', () => {
    expect(syllabusURLQueryBuilder.addUrlPublisherResultsListParams(configs.HOST + ':' + configs.PORT, publisherParams)).toEqual("http://localhost:4545/v1/publishers?pages=[1]&pub_year_start=[1]&pub_year_end=[1]&class_year_start=[1]&class_year_end=[1]&fields=[1,2]&countries=[1]&query=[Testing]")
  })

  test('addUrlFieldResultsListParams', () => {
    expect(syllabusURLQueryBuilder.addUrlFieldResultsListParams(configs.HOST + ':' + configs.PORT, fieldParams)).toEqual("http://localhost:4545/v1/fields?pages=[1]&countries=[1,2]&query=[Testing]")
  })

  test('addUrlCountryResultsListParams', () => {
    expect(syllabusURLQueryBuilder.addUrlCountryResultsListParams(configs.HOST + ':' + configs.PORT, countryParams)).toEqual("http://localhost:4545/v1/countries?pages=[1]&fields=[1,2]&query=[Testing]")
  })

  test('addUrlFullTextResultsListParams', () => {
    expect(syllabusURLQueryBuilder.addUrlFullTextResultsListParams(configs.HOST + ':' + configs.PORT, fullTextParams)).toEqual("http://localhost:4545/v1/full-text?query=[Testing]")
  })

  test('addUrlInstructorResultsListParams', () => {
    expect(syllabusURLQueryBuilder.addUrlInstructorResultsListParams(configs.HOST + ':' + configs.PORT, instructorParams)).toEqual("http://localhost:4545/v1/instructor-email?query=[Testing]")
  })
})
