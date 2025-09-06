import { faker } from '@faker-js/faker';


interface MockTestData {
  auth: {
    login: {    username: string
                password: string 
                lockedOutEmail: string
                problemUser: string
                performanceGlitchUser: string
                error_user: string
                visual_user: string
        }}}


export const mockTestData: MockTestData = {
  auth: {
    login: {
      username: 'standard_user',
        password:'secret_sauce',
        lockedOutEmail: 'locked_out_user',
        problemUser: 'problem_user',
        performanceGlitchUser: 'performance_glitch_user',
        error_user: 'error_user',
        visual_user: 'visual_user'

    }}}


    interface CheckoutData {
      checkout: {
        firstName: string
        lastName: string 
        postalCode: string 

      }}

      export const checkOutData: CheckoutData = {
        checkout: {
          firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            postalCode: faker.location.zipCode()

        }}