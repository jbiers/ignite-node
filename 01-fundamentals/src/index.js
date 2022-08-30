const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
    return response.json([ 
        "Course 01",
        "Course 02",
        "Course 03"  
    ]);
});

app.post("/courses", (request, response) => {
    return response.json([ 
        "Course 01",
        "Course 02",
        "Course 03",
        "Course 04",
    ]);
});

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;

    return response.json([ 
        "Course 07",
        "Course 02",
        "Course 03",
        "Course 04",
    ]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json([ 
        "Course 07",
        "Course 02",
        "Course 03",
    ]);
});

app.listen(3333);