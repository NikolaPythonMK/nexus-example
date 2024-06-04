import { enumType, objectType } from "nexus";

export const User = objectType({
    name: 'User',
    definition(t) {
        t.id('id')
        t.string('first_name')
        t.string('last_name')
        t.string('nick_name')
        t.string('phone')
        t.string('email')
        t.string('address')
        t.string('photo')
        t.string('date_of_birth')
        t.field('status', {type: UserStatus})
        t.nonNull.field('role', {type: UserRole})
        t.string('emergency_contact_name')
        t.string('emergency_contact_phone')
        t.string('nationality')
        t.string('language')
        t.string('time_zone')
        t.field('work_information', {type: WorkInformation})
    }
})

export const WorkInformation = objectType({
   name: 'WorkInformation',
   definition(t){
    t.id('id')
    t.int('employee_id')
    t.string('department')
    t.string('designation')
    t.field('employment_type', {type: EmploymentType})
    t.string('location')
    t.string('date_of_joining')
    t.field('supervisor', {type: User})
   } 
})

const EmploymentType = enumType({
    name: 'EmploymentType',
    members: ['PROBATION', 'INTERN', 'FULL_TIME', 'PART_TIME', 'CONTRACT', 'TEMPORARY', 'SEASONAL', 'CASUAL']
})

const UserRole = enumType({
    name: 'UserRole',
    members: ['ADMIN', 'USER']
})

const UserStatus = enumType({
    name: 'UserStatus',
    members: ['ACTIVE',
              'MEETING',
              'AWAY',
              'VACATION',
              'BUSINESS_TRAVEL',
              'LUNCH_BREAK',
              'TRAINING',
              'REMOTE',
              'SICK',
              'OFFLINE',
              'OUT_OF_OFFICE',
              'ON_LEAVE'
            ]
})


// TODO:
// shifts
// Salary or Wage Information: Depending on the application's privacy and security measures, including salary details could be useful.
// Performance Reviews: Links to documents or data concerning past performance reviews.
// Previous Positions: A history of previous roles or promotions within the company could be useful for HR and management.
// EMBG, transaction number, ...

// CONSIDERATIONS:
// 1. Data Privacy and Security: Make sure to consider data privacy laws (like GDPR or CCPA)
// when designing your schema and deciding what data to store and how it's accessed.
// 2. API Performance: Adding many fields or complex objects to your GraphQL schema can impact the performance of your API, especially
// if many of these fields resolve from separate database queries. Ensure that your data fetching layer is optimized and consider using
// techniques like batching and caching.