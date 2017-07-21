import {
  httpResultWrapperSimulator,
  httpResultsListWrapperSimulator
} from '../HTTP'

import {
  env
} from '../.env'

export let settledGetLandingUniversityPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator({
          syllabus_count: 1500,
          mostFrecuent: [
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                  "_id": 32,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "publisher": {
                  "_id": 14,
                  "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                  "by_unique_field": {
                      "_id": 152,
                      "name": "Math",
                      "syllabus_count": 9
                  }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                  "_id": 32,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "publisher": {
                  "_id": 14,
                  "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                  "by_unique_field": {
                      "_id": 152,
                      "name": "Math",
                      "syllabus_count": 9
                  }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                  "_id": 32,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "publisher": {
                  "_id": 14,
                  "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                  "by_unique_field": {
                      "_id": 152,
                      "name": "Math",
                      "syllabus_count": 9
                  }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                  "_id": 32,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "publisher": {
                  "_id": 14,
                  "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                  "by_unique_field": {
                      "_id": 152,
                      "name": "Math",
                      "syllabus_count": 9
                  }
              }
            },
          ],
          fieldChart: [{
            label: 'Economics',
            values: [
              {x: '1997', y: 2000},
              {x: '1998', y: 2000},
              {x: '1999', y: 2000},
              {x: '2000', y: 2000},
              {x: '2001', y: 2000},
              {x: '2002', y: 2000},
              {x: '2003', y: 2000},
              {x: '2004', y: 2000},
              {x: '2005', y: 2000},
              {x: '2006', y: 2000},
              {x: '2007', y: 2000},
              {x: '2008', y: 2000},
              {x: '2009', y: 2000},
              {x: '2010', y: 2000},
              {x: '2011', y: 6000},
              {x: '2012', y: 2500},
              {x: '2013', y: 5500},
              {x: '2014', y: 6000},
              {x: '2015', y: 4000},
              {x: '2016', y: 4000},
            ]
          },
          {
            label: 'Literature',
            values: [
              {x: '1997', y: 3000},
              {x: '1998', y: 5000},
              {x: '1999', y: 0},
              {x: '2000', y: 4000},
              {x: '2001', y: 0},
              {x: '2002', y: 1500},
              {x: '2003', y: 3000},
              {x: '2004', y: 0},
              {x: '2005', y: 6000},
              {x: '2006', y: 0},
              {x: '2007', y: 0},
              {x: '2008', y: 7000},
              {x: '2009', y: 0},
              {x: '2010', y: 10000},
              {x: '2011', y: 0},
              {x: '2012', y: 20000},
              {x: '2013', y: 0},
              {x: '2014', y: 2000},
              {x: '2015', y: 3000},
              {x: '2016', y: 3000},
            ]
          },
          {
            label: 'History',
            values: [
              {x: '1997', y: 3800},
              {x: '1998', y: 3800},
              {x: '1999', y: 3800},
              {x: '2000', y: 3800},
              {x: '2001', y: 3800},
              {x: '2002', y: 3800},
              {x: '2003', y: 3800},
              {x: '2004', y: 3800},
              {x: '2005', y: 3800},
              {x: '2006', y: 3800},
              {x: '2007', y: 3800},
              {x: '2008', y: 3800},
              {x: '2009', y: 3800},
              {x: '2010', y: 3800},
              {x: '2011', y: 3800},
              {x: '2012', y: 7000},
              {x: '2013', y: 3800},
              {x: '2014', y: 2000},
              {x: '2015', y: 2000},
              {x: '2016', y: 2000},
            ]
          },
          {
            label: 'English',
            values: [
              {x: '1997', y: 3000},
              {x: '1998', y: 5000},
              {x: '1999', y: 0},
              {x: '2000', y: 4000},
              {x: '2001', y: 0},
              {x: '2002', y: 1500},
              {x: '2003', y: 3000},
              {x: '2004', y: 0},
              {x: '2005', y: 6000},
              {x: '2006', y: 0},
              {x: '2007', y: 0},
              {x: '2008', y: 7000},
              {x: '2009', y: 0},
              {x: '2010', y: 0},
              {x: '2011', y: 0},
              {x: '2012', y: 2000},
              {x: '2013', y: 0},
              {x: '2014', y: 0},
              {x: '2015', y: 2000},
              {x: '2016', y: 3800},
            ]
          },
          {
            label: 'Biology',
            values: [
              {x: '1997', y: 3000},
              {x: '1998', y: 5000},
              {x: '1999', y: 0},
              {x: '2000', y: 4000},
              {x: '2001', y: 0},
              {x: '2002', y: 1500},
              {x: '2003', y: 3000},
              {x: '2004', y: 0},
              {x: '2005', y: 6000},
              {x: '2006', y: 0},
              {x: '2007', y: 0},
              {x: '2008', y: 7000},
              {x: '2009', y: 0},
              {x: '2010', y: 0},
              {x: '2011', y: 0},
              {x: '2012', y: 2000},
              {x: '2013', y: 0},
              {x: '2014', y: 0},
              {x: '2015', y: 0},
              {x: '2016', y: 4000},
            ]
          },],
          universityField:[
            {
              name: 'History',
              syllabus_count: 360,
              _id: 1
            },
            {
              name: 'Political Science',
              syllabus_count: 316,
              _id: 2
            },
            {
              name: 'Astronomy',
              syllabus_count: 290,
              _id: 3
            },
            {
              name: 'Classics',
              syllabus_count: 22,
              _id: 4
            },
          ]
        })
      )
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}
export let settledGetLandingUniversityFieldPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator({
          syllabyAvailableByYear:[
            {
              year: 2010,
              syllabus_count: 20,
              _id: 10,
              id_year: 2010
            },
            {
              year: 2011,
              syllabus_count: 20,
              _id: 10,
              id_year: 2011
            },
            {
              year: 2012,
              syllabus_count: 300,
              _id: 10,
              id_year: 2012
            },
            {
              year: 2013,
              syllabus_count: 40,
              _id: 10,
              id_year: 2013
            },
          ],
          topRanked: { "columbia": [
            {
              "_id": 52,
              "rank": 1,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 2,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 3,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 4,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 5,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 6,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 7,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 8,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 9,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 10,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 11,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
          },
        ],
          "allSchools": [
            {
              "_id": 52,
              "rank": 1,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 2,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 3,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 4,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 5,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 6,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 7,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 8,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 9,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 10,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 11,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
          },
        ]
      },
          closestPeerTeachingProfiles: [
            {
              title: 'New York University',
              url: 'www.google.com'
            },
            {
              title: 'Yale University',
              url: 'www.google.com'
            },
            {
              title: 'University of Chicago',
              url: 'www.google.com'
            },
            {
              title: 'University of California - Berkley',
              url: 'www.google.com'
            },
            {
              title: 'University of Virginia',
              url: 'www.google.com'
            },
          ],
          fieldChart:[{
            label: 'Economics',
            values: [
              {x: '1997', y: 2000},
              {x: '1998', y: 2000},
              {x: '1999', y: 2000},
              {x: '2000', y: 2000},
              {x: '2001', y: 2000},
              {x: '2002', y: 2000},
              {x: '2003', y: 2000},
              {x: '2004', y: 2000},
              {x: '2005', y: 2000},
              {x: '2006', y: 2000},
              {x: '2007', y: 2000},
              {x: '2008', y: 2000},
              {x: '2009', y: 2000},
              {x: '2010', y: 2000},
              {x: '2011', y: 6000},
              {x: '2012', y: 2500},
              {x: '2013', y: 5500},
              {x: '2014', y: 6000},
              {x: '2015', y: 4000},
              {x: '2016', y: 4000},
            ]
          },
          {
            label: 'Literature',
            values: [
              {x: '1997', y: 3000},
              {x: '1998', y: 5000},
              {x: '1999', y: 0},
              {x: '2000', y: 4000},
              {x: '2001', y: 0},
              {x: '2002', y: 1500},
              {x: '2003', y: 3000},
              {x: '2004', y: 0},
              {x: '2005', y: 6000},
              {x: '2006', y: 0},
              {x: '2007', y: 0},
              {x: '2008', y: 7000},
              {x: '2009', y: 0},
              {x: '2010', y: 10000},
              {x: '2011', y: 0},
              {x: '2012', y: 20000},
              {x: '2013', y: 0},
              {x: '2014', y: 2000},
              {x: '2015', y: 3000},
              {x: '2016', y: 3000},
            ]
          },
          {
            label: 'History',
            values: [
              {x: '1997', y: 3800},
              {x: '1998', y: 3800},
              {x: '1999', y: 3800},
              {x: '2000', y: 3800},
              {x: '2001', y: 3800},
              {x: '2002', y: 3800},
              {x: '2003', y: 3800},
              {x: '2004', y: 3800},
              {x: '2005', y: 3800},
              {x: '2006', y: 3800},
              {x: '2007', y: 3800},
              {x: '2008', y: 3800},
              {x: '2009', y: 3800},
              {x: '2010', y: 3800},
              {x: '2011', y: 3800},
              {x: '2012', y: 7000},
              {x: '2013', y: 3800},
              {x: '2014', y: 2000},
              {x: '2015', y: 2000},
              {x: '2016', y: 2000},
            ]
          },
          {
            label: 'English',
            values: [
              {x: '1997', y: 3000},
              {x: '1998', y: 5000},
              {x: '1999', y: 0},
              {x: '2000', y: 4000},
              {x: '2001', y: 0},
              {x: '2002', y: 1500},
              {x: '2003', y: 3000},
              {x: '2004', y: 0},
              {x: '2005', y: 6000},
              {x: '2006', y: 0},
              {x: '2007', y: 0},
              {x: '2008', y: 7000},
              {x: '2009', y: 0},
              {x: '2010', y: 0},
              {x: '2011', y: 0},
              {x: '2012', y: 2000},
              {x: '2013', y: 0},
              {x: '2014', y: 0},
              {x: '2015', y: 2000},
              {x: '2016', y: 3800},
            ]
          },
          {
            label: 'Biology',
            values: [
              {x: '1997', y: 3000},
              {x: '1998', y: 5000},
              {x: '1999', y: 0},
              {x: '2000', y: 4000},
              {x: '2001', y: 0},
              {x: '2002', y: 1500},
              {x: '2003', y: 3000},
              {x: '2004', y: 0},
              {x: '2005', y: 6000},
              {x: '2006', y: 0},
              {x: '2007', y: 0},
              {x: '2008', y: 7000},
              {x: '2009', y: 0},
              {x: '2010', y: 0},
              {x: '2011', y: 0},
              {x: '2012', y: 2000},
              {x: '2013', y: 0},
              {x: '2014', y: 0},
              {x: '2015', y: 0},
              {x: '2016', y: 4000},
            ]
          },]
        })
      )
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}
export let settledGetLandingUniversityFieldYearPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultWrapperSimulator({
          mostFrecuent: [
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                  "_id": 32,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "publisher": {
                  "_id": 14,
                  "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                  "by_unique_field": {
                      "_id": 152,
                      "name": "Math",
                      "syllabus_count": 9
                  }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                  "_id": 32,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "publisher": {
                  "_id": 14,
                  "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                  "by_unique_field": {
                      "_id": 152,
                      "name": "Math",
                      "syllabus_count": 9
                  }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                  "_id": 32,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "publisher": {
                  "_id": 14,
                  "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                  "by_unique_field": {
                      "_id": 152,
                      "name": "Math",
                      "syllabus_count": 9
                  }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                  "_id": 32,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "publisher": {
                  "_id": 14,
                  "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                  "by_unique_field": {
                      "_id": 152,
                      "name": "Math",
                      "syllabus_count": 9
                  }
              }
            },
          ]
        })
      )
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}

export let settledGetTitleResultsListPromise = (resolve, reject) => {
  if (!env.REJECTED_PROMISE) {

    var tid = setTimeout(() => {
      clearInterval(tid)
      resolve(
        httpResultsListWrapperSimulator({
          _id: 42,
          syllbi_count: 400,
          most_frecuently_assigned_texts: [{
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                "_id": 32,
                "author_first": "Neil",
                "author_middle": null,
                "author_last": "Cambell",
              },
              "publisher": {
                "_id": 14,
                "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                "by_unique_field": {
                  "_id": 152,
                  "name": "Math",
                  "syllabus_count": 9
                }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                "_id": 32,
                "author_first": "Neil",
                "author_middle": null,
                "author_last": "Cambell",
              },
              "publisher": {
                "_id": 14,
                "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                "by_unique_field": {
                  "_id": 152,
                  "name": "Math",
                  "syllabus_count": 9
                }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                "_id": 32,
                "author_first": "Neil",
                "author_middle": null,
                "author_last": "Cambell",
              },
              "publisher": {
                "_id": 14,
                "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                "by_unique_field": {
                  "_id": 152,
                  "name": "Math",
                  "syllabus_count": 9
                }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                "_id": 32,
                "author_first": "Neil",
                "author_middle": null,
                "author_last": "Cambell",
              },
              "publisher": {
                "_id": 14,
                "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                "by_unique_field": {
                  "_id": 152,
                  "name": "Math",
                  "syllabus_count": 9
                }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                "_id": 32,
                "author_first": "Neil",
                "author_middle": null,
                "author_last": "Cambell",
              },
              "publisher": {
                "_id": 14,
                "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                "by_unique_field": {
                  "_id": 152,
                  "name": "Math",
                  "syllabus_count": 9
                }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                "_id": 32,
                "author_first": "Neil",
                "author_middle": null,
                "author_last": "Cambell",
              },
              "publisher": {
                "_id": 14,
                "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                "by_unique_field": {
                  "_id": 152,
                  "name": "Math",
                  "syllabus_count": 9
                }
              }
            },
            {
              "_id": 12,
              "title": "Introduction to Economics",
              "author": {
                "_id": 32,
                "author_first": "Neil",
                "author_middle": null,
                "author_last": "Cambell",
              },
              "publisher": {
                "_id": 14,
                "name": "Pengiun Books"
              },
              "pub_year": 2000,
              "appearences": {
                "by_unique_field": {
                  "_id": 152,
                  "name": "Math",
                  "syllabus_count": 9
                }
              }
            },
          ]
        })
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
        httpResultsListWrapperSimulator({
          _id: 43,
          syllabus_count: 2000,
          author_list: [{
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
              "rank": 1,
              "appearences": {
                "total": 4000
              },
              "text_count": 20,
              image: null
            },
            {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
              "rank": 1,
              "appearences": {
                "total": 4000
              },
              "text_count": 20,
              image: null
            },
            {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
              "rank": 1,
              "appearences": {
                "total": 4000
              },
              "text_count": 20,
              image: null
            },
            {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
              "rank": 1,
              "appearences": {
                "total": 4000
              },
              "text_count": 20,
              image: null
            },
            {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
              "rank": 1,
              "appearences": {
                "total": 4000
              },
              "text_count": 20,
              image: null
            }
          ]
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
          syllabus_count: 400,
          syllabi_list: [{
              data: {
                rank: 1,
                title: {
                  titleName: 'More Sons About Buildings and Food',
                  titleEmail: 'asd@gmail.com'
                }
              },
              dataWrapper: {
                field: 'Architecture',
                year: 'Spring 2010',
                title: "More Sons About Buildings and Food",
                email: 'asd@gmail.com'
              }
            },
            {
              data: {
                rank: 1,
                title: {
                  titleName: 'More Sons About Buildings and Food',
                  titleEmail: 'asd@gmail.com'
                }
              },
              dataWrapper: {
                field: 'History',
                year: 'Spring 2010',
                title: "More Sons About Buildings and Food",
                email: 'asd@gmail.com'
              }
            },
            {
              data: {
                rank: 1,
                title: {
                  titleName: 'More Sons About Buildings and Food',
                  titleEmail: 'asd@gmail.com'
                }
              },
              dataWrapper: {
                field: 'Math',
                year: 'Spring 2010',
                title: "More Sons About Buildings and Food",
                email: 'asd@gmail.com'
              }
            },
          ]
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
          syllabus_count: 300,
          syllabi_list: [{
              data: {
                rank: 1,
                title: {
                  titleName: 'More Sons About Buildings and Food',
                  titleEmail: 'asd@gmail.com'
                }
              },
              dataWrapper: {
                field: 'Architecture',
                year: 'Spring 2010',
                title: "More Sons About Buildings and Food",
                email: 'asd@gmail.com'
              }
            },
            {
              data: {
                rank: 1,
                title: {
                  titleName: 'More Sons About Buildings and Food',
                  titleEmail: 'asd@gmail.com'
                }
              },
              dataWrapper: {
                field: 'History',
                year: 'Spring 2010',
                title: "More Sons About Buildings and Food",
                email: 'asd@gmail.com'
              }
            },
            {
              data: {
                rank: 1,
                title: {
                  titleName: 'More Sons About Buildings and Food',
                  titleEmail: 'asd@gmail.com'
                }
              },
              dataWrapper: {
                field: 'Math',
                year: 'Spring 2010',
                title: "More Sons About Buildings and Food",
                email: 'asd@gmail.com'
              }
            },
          ]
        })
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
          "_id": 55,
          "rank": 1,
          "score": 6.5,
          "title": "A Manual for Writers of Term Papers, Theses, and Dissertations",
          "title_description": "Whether you’re a policymaker, investor, or involved in a nonprofit, Social Entrepreneurship for the 21st Century gives you the knowledge you need to make the best possible decisions for the future. A former McKinsey consultant reveals how social entrepreneurship has filtered into the workings of government and private enterprise, where social sector values are now shaping “social impact” capitalism.", //DOESNT EXISTS ACTUALLY
          "author": {
            "_id": 51,
            "author_first": "Neil",
            "author_middle": null,
            "author_last": "Cambell",
          },
          "publisher": {
            "_id": 55,
            "name": "MacMillan"
          },
          "pub_year": 2013,
          "appearences": {
            "total": 200,
            "by_field": [{
                "_id": 41,
                "name": "Math",
                "syllabus_count": 10
              },
              {
                "_id": 41,
                "name": 'Public Administration',
                "syllabus_count": 9
              },
              {
                "_id": 100,
                "name": 'Business',
                "syllabus_count": 5
              },
              {
                "_id": 54,
                "name": 'Undefined',
                "syllabus_count": 1
              },
              {
                "_id": 13,
                "name": 'Urban Planing',
                "syllabus_count": 4
              }
            ]
          },
          topRanked: { "columbia": [
            {
              "_id": 52,
              "rank": 1,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 2,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 3,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 4,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 5,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 6,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 7,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 8,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 9,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 10,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 11,
              "name": "Columbia",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
          },
        ],
          "allSchools": [
            {
              "_id": 52,
              "rank": 1,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 2,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 3,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 4,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 5,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 6,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 7,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 8,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 9,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 10,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
            },
            {
              "_id": 52,
              "rank": 11,
              "name": "All Schools",
              "author": {
                  "_id": 51,
                  "author_first": "Neil",
                  "author_middle": null,
                  "author_last": "Cambell",
              },
              "appearences": {
                  "total": 100
              },
              "score": 9.9,
              "pub_year": 1943
          },
        ]
      },
          "availability": {
            "openVersion": { // OR EXTERNAL LINKS, NO DB INDEXED?
              "_id": 55,
              "title": "Thesis #1",
              "url": "https://facebook.com"
            },
            "viaYourInstitution": { // OR EXTERNAL LINKS, NO DB INDEXED?
              "_id": 55,
              "title": "Thesis #1",
              "url": "https://facebook.com"
            }
          },
          "seeTheTextOn": [{ // OR EXTERNAL LINKS, NO DB INDEXED?
              "_id": 55,
              "name": "Sociology 1",
              "url": "https://facebook.com"
            },
            { // OR EXTERNAL LINKS, NO DB INDEXED?
              "_id": 55,
              "name": "Sociology 1",
              "url": "https://facebook.com"
            },
            { // OR EXTERNAL LINKS, NO DB INDEXED?
              "_id": 55,
              "name": "Sociology 1",
              "url": "https://facebook.com"
            },
            { // OR EXTERNAL LINKS, NO DB INDEXED?
              "_id": 55,
              "name": "Sociology 1",
              "url": "https://facebook.com"
            },
            { // OR EXTERNAL LINKS, NO DB INDEXED?
              "_id": 55,
              "name": "Sociology 1",
              "url": "https://facebook.com"
            },
            { // OR EXTERNAL LINKS, NO DB INDEXED?
              "_id": 55,
              "name": "Sociology 1",
              "url": "https://facebook.com"
            },
          ],
          "country_map": {
            initialPosition: {
              lat: 39.73,
              lng: -104.99,
              zoom: 10
            },
            "data": [{
                "_id": 55,
                "lat": 39.61,
                "lon": -105.02,
                "name": "FICH - Universidad Nacional del Litoral",
                "formatedAdress": "Santa fe, Santa fe",
                "syllabus_count": 20000
              },
              {
                "_id": 55,
                "lat": 39.74,
                "lon": -104.99,
                "name": "FICH - Universidad Nacional del Litoral",
                "formatedAdress": "Santa fe, Santa fe",
                "syllabus_count": 20000
              },
              {
                "_id": 55,
                "lat": 39.73,
                "lon": -104.8,
                "name": "FICH - Universidad Nacional del Litoral",
                "formatedAdress": "Santa fe, Santa fe",
                "syllabus_count": 20000
              },
              {
                "_id": 55,
                "lat": 39.77,
                "lon": -105.23,
                "name": "FICH - Universidad Nacional del Litoral",
                "formatedAdress": "Santa fe, Santa fe",
                "syllabus_count": 20000
              },
            ]
          },
          "top_fields_by_year": {
            "data": [{
                label: 'Economics',
                values: [{
                    x: '1997',
                    y: 2000
                  },
                  {
                    x: '1998',
                    y: 2000
                  },
                  {
                    x: '1999',
                    y: 2000
                  },
                  {
                    x: '2000',
                    y: 2000
                  },
                  {
                    x: '2001',
                    y: 2000
                  },
                  {
                    x: '2002',
                    y: 2000
                  },
                  {
                    x: '2003',
                    y: 2000
                  },
                  {
                    x: '2004',
                    y: 2000
                  },
                  {
                    x: '2005',
                    y: 2000
                  },
                  {
                    x: '2006',
                    y: 2000
                  },
                  {
                    x: '2007',
                    y: 2000
                  },
                  {
                    x: '2008',
                    y: 2000
                  },
                  {
                    x: '2009',
                    y: 2000
                  },
                  {
                    x: '2010',
                    y: 2000
                  },
                  {
                    x: '2011',
                    y: 6000
                  },
                  {
                    x: '2012',
                    y: 2500
                  },
                  {
                    x: '2013',
                    y: 5500
                  },
                  {
                    x: '2014',
                    y: 6000
                  },
                  {
                    x: '2015',
                    y: 4000
                  },
                  {
                    x: '2016',
                    y: 4000
                  },
                ]
              },
              {
                label: 'Literature',
                values: [{
                    x: '1997',
                    y: 3000
                  },
                  {
                    x: '1998',
                    y: 5000
                  },
                  {
                    x: '1999',
                    y: 0
                  },
                  {
                    x: '2000',
                    y: 4000
                  },
                  {
                    x: '2001',
                    y: 0
                  },
                  {
                    x: '2002',
                    y: 1500
                  },
                  {
                    x: '2003',
                    y: 3000
                  },
                  {
                    x: '2004',
                    y: 0
                  },
                  {
                    x: '2005',
                    y: 6000
                  },
                  {
                    x: '2006',
                    y: 0
                  },
                  {
                    x: '2007',
                    y: 0
                  },
                  {
                    x: '2008',
                    y: 7000
                  },
                  {
                    x: '2009',
                    y: 0
                  },
                  {
                    x: '2010',
                    y: 10000
                  },
                  {
                    x: '2011',
                    y: 0
                  },
                  {
                    x: '2012',
                    y: 20000
                  },
                  {
                    x: '2013',
                    y: 0
                  },
                  {
                    x: '2014',
                    y: 2000
                  },
                  {
                    x: '2015',
                    y: 3000
                  },
                  {
                    x: '2016',
                    y: 3000
                  },
                ]
              },
              {
                label: 'History',
                values: [{
                    x: '1997',
                    y: 3800
                  },
                  {
                    x: '1998',
                    y: 3800
                  },
                  {
                    x: '1999',
                    y: 3800
                  },
                  {
                    x: '2000',
                    y: 3800
                  },
                  {
                    x: '2001',
                    y: 3800
                  },
                  {
                    x: '2002',
                    y: 3800
                  },
                  {
                    x: '2003',
                    y: 3800
                  },
                  {
                    x: '2004',
                    y: 3800
                  },
                  {
                    x: '2005',
                    y: 3800
                  },
                  {
                    x: '2006',
                    y: 3800
                  },
                  {
                    x: '2007',
                    y: 3800
                  },
                  {
                    x: '2008',
                    y: 3800
                  },
                  {
                    x: '2009',
                    y: 3800
                  },
                  {
                    x: '2010',
                    y: 3800
                  },
                  {
                    x: '2011',
                    y: 3800
                  },
                  {
                    x: '2012',
                    y: 7000
                  },
                  {
                    x: '2013',
                    y: 3800
                  },
                  {
                    x: '2014',
                    y: 2000
                  },
                  {
                    x: '2015',
                    y: 2000
                  },
                  {
                    x: '2016',
                    y: 2000
                  },
                ]
              },
              {
                label: 'English',
                values: [{
                    x: '1997',
                    y: 3000
                  },
                  {
                    x: '1998',
                    y: 5000
                  },
                  {
                    x: '1999',
                    y: 0
                  },
                  {
                    x: '2000',
                    y: 4000
                  },
                  {
                    x: '2001',
                    y: 0
                  },
                  {
                    x: '2002',
                    y: 1500
                  },
                  {
                    x: '2003',
                    y: 3000
                  },
                  {
                    x: '2004',
                    y: 0
                  },
                  {
                    x: '2005',
                    y: 6000
                  },
                  {
                    x: '2006',
                    y: 0
                  },
                  {
                    x: '2007',
                    y: 0
                  },
                  {
                    x: '2008',
                    y: 7000
                  },
                  {
                    x: '2009',
                    y: 0
                  },
                  {
                    x: '2010',
                    y: 0
                  },
                  {
                    x: '2011',
                    y: 0
                  },
                  {
                    x: '2012',
                    y: 2000
                  },
                  {
                    x: '2013',
                    y: 0
                  },
                  {
                    x: '2014',
                    y: 0
                  },
                  {
                    x: '2015',
                    y: 2000
                  },
                  {
                    x: '2016',
                    y: 3800
                  },
                ]
              },
              {
                label: 'Biology',
                values: [{
                    x: '1997',
                    y: 3000
                  },
                  {
                    x: '1998',
                    y: 5000
                  },
                  {
                    x: '1999',
                    y: 0
                  },
                  {
                    x: '2000',
                    y: 4000
                  },
                  {
                    x: '2001',
                    y: 0
                  },
                  {
                    x: '2002',
                    y: 1500
                  },
                  {
                    x: '2003',
                    y: 3000
                  },
                  {
                    x: '2004',
                    y: 0
                  },
                  {
                    x: '2005',
                    y: 6000
                  },
                  {
                    x: '2006',
                    y: 0
                  },
                  {
                    x: '2007',
                    y: 0
                  },
                  {
                    x: '2008',
                    y: 7000
                  },
                  {
                    x: '2009',
                    y: 0
                  },
                  {
                    x: '2010',
                    y: 0
                  },
                  {
                    x: '2011',
                    y: 0
                  },
                  {
                    x: '2012',
                    y: 2000
                  },
                  {
                    x: '2013',
                    y: 0
                  },
                  {
                    x: '2014',
                    y: 0
                  },
                  {
                    x: '2015',
                    y: 0
                  },
                  {
                    x: '2016',
                    y: 4000
                  },
                ]
              },
            ]
          }
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
          "_id": 42,
          "author_first": "Fredric",
          "author_middle": null,
          "author_last": "Jameson",
          "author_description": "Fredric Jameson (born 14 April 1934) is an American literary critic and Marxist political theorist. He is best known for his analysis of contemporary cultural trends. He once described postmodernism as the spatialization of culture under the pressure of organized capitalism. Jameson's best-known books include Postmodernism, or, The Cultural Logic of Late Capitalism, The Political Unconscious, and Marxism and Form.", //DOESNT EXISTS ACTUALLY
          "image": null, //STATIC ASSETS SHOULD BE INDEXED AS THE RELATIVE PATH FROM ROOT,
          "appearences": {
            "total": 200,
            "by_field": [{
                "_id": 41,
                "name": "Math",
                "syllabus_count": 10
              },
              {
                "_id": 41,
                "name": 'Public Administration',
                "syllabus_count": 9
              },
              {
                "_id": 100,
                "name": 'Business',
                "syllabus_count": 5
              },
              {
                "_id": 54,
                "name": 'Undefined',
                "syllabus_count": 1
              },
            ]
          },
          "author_titles": [{
              "_id": 41,
              "title": "The Antinomies Of Realism",
              "publisher": {
                "_id": 432,
                "name": "The penguin books"
              },
              "appearences": {
                "by_unique_field": {
                  "_id": 12,
                  "name": "Math",
                  "syllabus_count": 123
                }
              },
              "pub_year": 1998,
              "unattributed": 8,
              "score": 12.0
            },
            {
              "_id": 41,
              "title": "Archaeologies of the Future: The Desire Called Utopia and Other Science Fictions",
              "publisher": {
                "_id": 432,
                "name": "The penguin books"
              },
              "appearences": {
                "by_unique_field": {
                  "_id": 12,
                  "name": "Math",
                  "syllabus_count": 123
                }
              },
              "pub_year": 1998,
              "unattributed": 8,
              "score": 12.0
            },
            {
              "_id": 41,
              "title": "The Geopolitical Aesthetic: Cinema and Space in the World System (Perspectives)",
              "publisher": {
                "_id": 432,
                "name": "The penguin books"
              },
              "appearences": {
                "by_unique_field": {
                  "_id": 12,
                  "name": "Math",
                  "syllabus_count": 123
                }
              },
              "pub_year": 1998,
              "unattributed": 8,
              "score": 12.0
            },
            {
              "_id": 41,
              "title": "The Geopolitical Aesthetic: Cinema and Space in the World System (Perspectives)",
              "publisher": {
                "_id": 432,
                "name": "The penguin books"
              },
              "appearences": {
                "by_unique_field": {
                  "_id": 12,
                  "name": "Math",
                  "syllabus_count": 123
                }
              },
              "pub_year": 1998,
              "unattributed": 8,
              "score": 12.0
            },
          ],
          "country_map": {
            initialPosition: {
              lat: 39.73,
              lng: -104.99,
              zoom: 10
            },
            "data": [{
                "_id": 55,
                "lat": 39.61,
                "lon": -105.02,
                "name": "FICH - Universidad Nacional del Litoral",
                "formatedAdress": "Santa fe, Santa fe",
                "syllabus_count": 20000
              },
              {
                "_id": 55,
                "lat": 39.74,
                "lon": -104.99,
                "name": "FICH - Universidad Nacional del Litoral",
                "formatedAdress": "Santa fe, Santa fe",
                "syllabus_count": 20000
              },
              {
                "_id": 55,
                "lat": 39.73,
                "lon": -104.8,
                "name": "FICH - Universidad Nacional del Litoral",
                "formatedAdress": "Santa fe, Santa fe",
                "syllabus_count": 20000
              },
              {
                "_id": 55,
                "lat": 39.77,
                "lon": -105.23,
                "name": "FICH - Universidad Nacional del Litoral",
                "formatedAdress": "Santa fe, Santa fe",
                "syllabus_count": 20000
              },
            ]
          },
          "top_titles_by_year": {
            "data": [{
                label: 'Economics',
                values: [{
                    x: '1997',
                    y: 2000
                  },
                  {
                    x: '1998',
                    y: 2000
                  },
                  {
                    x: '1999',
                    y: 2000
                  },
                  {
                    x: '2000',
                    y: 2000
                  },
                  {
                    x: '2001',
                    y: 2000
                  },
                  {
                    x: '2002',
                    y: 2000
                  },
                  {
                    x: '2003',
                    y: 2000
                  },
                  {
                    x: '2004',
                    y: 2000
                  },
                  {
                    x: '2005',
                    y: 2000
                  },
                  {
                    x: '2006',
                    y: 2000
                  },
                  {
                    x: '2007',
                    y: 2000
                  },
                  {
                    x: '2008',
                    y: 2000
                  },
                  {
                    x: '2009',
                    y: 2000
                  },
                  {
                    x: '2010',
                    y: 2000
                  },
                  {
                    x: '2011',
                    y: 6000
                  },
                  {
                    x: '2012',
                    y: 2500
                  },
                  {
                    x: '2013',
                    y: 5500
                  },
                  {
                    x: '2014',
                    y: 6000
                  },
                  {
                    x: '2015',
                    y: 4000
                  },
                  {
                    x: '2016',
                    y: 4000
                  },
                ]
              },
              {
                label: 'Literature',
                values: [{
                    x: '1997',
                    y: 3000
                  },
                  {
                    x: '1998',
                    y: 5000
                  },
                  {
                    x: '1999',
                    y: 0
                  },
                  {
                    x: '2000',
                    y: 4000
                  },
                  {
                    x: '2001',
                    y: 0
                  },
                  {
                    x: '2002',
                    y: 1500
                  },
                  {
                    x: '2003',
                    y: 3000
                  },
                  {
                    x: '2004',
                    y: 0
                  },
                  {
                    x: '2005',
                    y: 6000
                  },
                  {
                    x: '2006',
                    y: 0
                  },
                  {
                    x: '2007',
                    y: 0
                  },
                  {
                    x: '2008',
                    y: 7000
                  },
                  {
                    x: '2009',
                    y: 0
                  },
                  {
                    x: '2010',
                    y: 10000
                  },
                  {
                    x: '2011',
                    y: 0
                  },
                  {
                    x: '2012',
                    y: 20000
                  },
                  {
                    x: '2013',
                    y: 0
                  },
                  {
                    x: '2014',
                    y: 2000
                  },
                  {
                    x: '2015',
                    y: 3000
                  },
                  {
                    x: '2016',
                    y: 3000
                  },
                ]
              },
              {
                label: 'History',
                values: [{
                    x: '1997',
                    y: 3800
                  },
                  {
                    x: '1998',
                    y: 3800
                  },
                  {
                    x: '1999',
                    y: 3800
                  },
                  {
                    x: '2000',
                    y: 3800
                  },
                  {
                    x: '2001',
                    y: 3800
                  },
                  {
                    x: '2002',
                    y: 3800
                  },
                  {
                    x: '2003',
                    y: 3800
                  },
                  {
                    x: '2004',
                    y: 3800
                  },
                  {
                    x: '2005',
                    y: 3800
                  },
                  {
                    x: '2006',
                    y: 3800
                  },
                  {
                    x: '2007',
                    y: 3800
                  },
                  {
                    x: '2008',
                    y: 3800
                  },
                  {
                    x: '2009',
                    y: 3800
                  },
                  {
                    x: '2010',
                    y: 3800
                  },
                  {
                    x: '2011',
                    y: 3800
                  },
                  {
                    x: '2012',
                    y: 7000
                  },
                  {
                    x: '2013',
                    y: 3800
                  },
                  {
                    x: '2014',
                    y: 2000
                  },
                  {
                    x: '2015',
                    y: 2000
                  },
                  {
                    x: '2016',
                    y: 2000
                  },
                ]
              },
              {
                label: 'English',
                values: [{
                    x: '1997',
                    y: 3000
                  },
                  {
                    x: '1998',
                    y: 5000
                  },
                  {
                    x: '1999',
                    y: 0
                  },
                  {
                    x: '2000',
                    y: 4000
                  },
                  {
                    x: '2001',
                    y: 0
                  },
                  {
                    x: '2002',
                    y: 1500
                  },
                  {
                    x: '2003',
                    y: 3000
                  },
                  {
                    x: '2004',
                    y: 0
                  },
                  {
                    x: '2005',
                    y: 6000
                  },
                  {
                    x: '2006',
                    y: 0
                  },
                  {
                    x: '2007',
                    y: 0
                  },
                  {
                    x: '2008',
                    y: 7000
                  },
                  {
                    x: '2009',
                    y: 0
                  },
                  {
                    x: '2010',
                    y: 0
                  },
                  {
                    x: '2011',
                    y: 0
                  },
                  {
                    x: '2012',
                    y: 2000
                  },
                  {
                    x: '2013',
                    y: 0
                  },
                  {
                    x: '2014',
                    y: 0
                  },
                  {
                    x: '2015',
                    y: 2000
                  },
                  {
                    x: '2016',
                    y: 3800
                  },
                ]
              },
              {
                label: 'Biology',
                values: [{
                    x: '1997',
                    y: 3000
                  },
                  {
                    x: '1998',
                    y: 5000
                  },
                  {
                    x: '1999',
                    y: 0
                  },
                  {
                    x: '2000',
                    y: 4000
                  },
                  {
                    x: '2001',
                    y: 0
                  },
                  {
                    x: '2002',
                    y: 1500
                  },
                  {
                    x: '2003',
                    y: 3000
                  },
                  {
                    x: '2004',
                    y: 0
                  },
                  {
                    x: '2005',
                    y: 6000
                  },
                  {
                    x: '2006',
                    y: 0
                  },
                  {
                    x: '2007',
                    y: 0
                  },
                  {
                    x: '2008',
                    y: 7000
                  },
                  {
                    x: '2009',
                    y: 0
                  },
                  {
                    x: '2010',
                    y: 0
                  },
                  {
                    x: '2011',
                    y: 0
                  },
                  {
                    x: '2012',
                    y: 2000
                  },
                  {
                    x: '2013',
                    y: 0
                  },
                  {
                    x: '2014',
                    y: 0
                  },
                  {
                    x: '2015',
                    y: 0
                  },
                  {
                    x: '2016',
                    y: 4000
                  },
                ]
              },
            ]
          }
        })
      )
    }, env.REQUEST_DEV_TIMMING)
  } else {
    reject(env.REJECTED_PROMISE_ERROR)
  }
}
