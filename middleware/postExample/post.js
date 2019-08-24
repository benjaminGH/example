/**
* Sends Candidate's General information towards database.
* {@link #examploeRoute}
* @name post/exampleRoute
* @param {json} request Body with example information.
* @returns {json} Status from storage in database and example.
* @example curl --data "example" -X POST http://localhost:5050/exampleRoute
*/
app.route('/examploeRoute').post(async function(req, res) {
  try {
    var resultPost = await dataFRONT.postExample(req, res);
    return res.status( 200 ).send( resultPost );
  } catch(err) {
    console.log(err);
    return res.status( 400 ).send( err );
  }
});