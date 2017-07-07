import {
  syllabusEduPortalHTTPService
} from '.'

describe('SyllabusEduPortalHTTPService works', () => {

  test('syllabusEduPortalHTTPService.getTitleResultsList()', () => {
    expect.assertions(3)
    return syllabusEduPortalHTTPService.getTitleResultsList({})
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeDefined()
      })
  })
  test('syllabusEduPortalHTTPService.getLandingUniversity()', () => {
    expect.assertions(3)
    return syllabusEduPortalHTTPService.getTitleResultsList({})
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeDefined()
      })
  })
  test('syllabusEduPortalHTTPService.getLandingUniversityField()', () => {
    expect.assertions(3)
    return syllabusEduPortalHTTPService.getLandingUniversityField({})
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeDefined()
      })
  })
  test('syllabusEduPortalHTTPService.getLandingUniversityFieldYear()', () => {
    expect.assertions(3)
    return syllabusEduPortalHTTPService.getLandingUniversityFieldYear({})
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeDefined()
      })
  })
  test('syllabusEduPortalHTTPService.getTitleResult()', () => {
    expect.assertions(3)
    return syllabusEduPortalHTTPService.getTitleResult(2)
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeDefined()
      })
  })
  test('syllabusEduPortalHTTPService.getAuthorResultsList()', () => {
    expect.assertions(3)
    return syllabusEduPortalHTTPService.getAuthorResultsList({})
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeDefined()
      })
  })
  test('syllabusEduPortalHTTPService.getInstructorResultsList()', () => {
    expect.assertions(3)
    return syllabusEduPortalHTTPService.getInstructorResultsList({})
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeDefined()
      })
  })
  test('syllabusEduPortalHTTPService.getFullTextResultsList()', () => {
    expect.assertions(3)
    return syllabusEduPortalHTTPService.getFullTextResultsList({})
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeDefined()
      })
  })
  test('syllabusEduPortalHTTPService.getAuthorResult()', () => {
    expect.assertions(3)
    return syllabusEduPortalHTTPService.getAuthorResult(1)
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.data).not.toBeNull()
        expect(response.data).toBeDefined()
      })
  })

})
