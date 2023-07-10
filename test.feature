Feature:

  Scenario:
    * url 'http://localhost:3000'
    * path 'users'
    * method get
    * status 200
    * match response ==
    """
    [
      {
        "name": "John Mayer",
        "info": {
          "title": "Mr.",
          "age": "35",
          "phone": "23423423-23423",
          "email": "jmayer@test.com"
        },
        "id": "old001"
      }
    ]
    """