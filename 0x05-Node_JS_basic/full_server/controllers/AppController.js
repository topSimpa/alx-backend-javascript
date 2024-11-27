/**
* @file App Controller Module
* @author Simpa
*/

export default class AppController {
  /**
   * Controls the / responses
   */

  // eslint-disable-next-line class-methods-use-this
  getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
