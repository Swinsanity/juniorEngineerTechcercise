# juniorEngineerTechcercise
My technical exercise for my junior engineering application

## Goals:

- Showcase any experience related to software engineering
- Provide workable/pseudo code to the solution
- Understand how you tackle a problem either via code or documentation

## Instructions:

1. First, initialize the local server using node index.js or node . in your local terminal
    - For convenience, I downloaded nodemon to automatically restart the server when I made changes

2. The server will give you the address where it is active, this will allow you to utilize the API
    - Alternatively, you can use Postman (which is what I did)
    ![Server Starting Screenshot](/screenshots/serverStart.png "Starting the server!")

3. In Postman or the browser window, you can find certain transactions by visiting certain paths:

    - Search for a transaction by ID by going to: http://localhost:8080/transactions/[The transaction ID]
    
    ![Transaction ID Search in Postman](/screenshots/idNumberSearch.png "Searching by ID")
    
    - Search for all transactions on a certain account number by going to: 
    http://localhost:8080/transactions/search/[The Account number]

    ![Account Number Search in Postman](/screenshots/accountNumberSearch.png "Searching by account number")
    
        Note: Include the leading zeroes in the account number or there will be no results

4. Once you're done, press ctrl + c to stop the server!

## Improvements/Thoughts:

- If I had the time, I would have loved to build out a fully functioning app using REACT or even just HTML/CSS
- I would like to find a way to not require the leading zeroes when searching by account number
- Would have liked to do more with searching by dates


