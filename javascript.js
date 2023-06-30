const path = location.href.split("/");
let question;
let pages;
let open_type;

if (path[2] == "localhost:8000") {
    if (location.href == "http://localhost:8000/question1.html") {
        question = 1;
    } else if (location.href == "http://localhost:8000/question2.html") {
        question = 2;
    } else if (location.href == "http://localhost:8000/question3.html") {
        question = 3;
    } else if (location.href == "http://localhost:8000/question4.html") {
        question = 4;
    }
    pages = {
        1: "http://localhost:8000/question2.html",
        2: "http://localhost:8000/question3.html",
        3: "http://localhost:8000/question4.html",
        4: "http://localhost:8000/end.html"
    };
    open_type = "local";
} else if (path[2] == "the-real-finnventor.github.io") {
    if (location.href == "https://the-real-finnventor.github.io/quiz/question1.html") {
        question = 1;
    } else if (location.href == "https://the-real-finnventor.github.io/quiz/question2.html") {
        question = 2;
    } else if (location.href == "https://the-real-finnventor.github.io/quiz/question3.html") {
        question = 3;
    } else if (location.href == "https://the-real-finnventor.github.io/quiz/question4.html") {
        question = 4;
    }
    pages = {
        1: "https://the-real-finnventor.github.io/quiz/question2.html",
        2: "https://the-real-finnventor.github.io/quiz/question3.html",
        3: "https://the-real-finnventor.github.io/quiz/question4.html",
        4: "https://the-real-finnventor.github.io/quiz/end.html"
    };
    open_type = "github";
}

const answers = {
    1: "2",
    2: "3",
    3: "4",
    4: "5"
}

function check() {
    const box_text = document.getElementById("answer").value;
    if (open_type == "local") {
        send_post("http://localhost:5000", box_text)
            .then(correct => {
                if (correct) {
                    location.href = pages[question];
                } else {
                    document.getElementById("incorrect").className = "alert alert-dismissible alert-primary";
                }
            });
    } else {
        send_post("http://finnventor.pythonanywhere.com/", box_text)
            .then(correct => {
                if (correct) {
                    location.href = pages[question];
                } else {
                    document.getElementById("incorrect").className = "alert alert-dismissible alert-primary";
                }
            });
    }
}

function send_post(url, user_input) {
    const data = {
        answer: user_input,
        question: question
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    console.log('Sending data:', data);

    return fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
            return data["result"];
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors
        });
}


document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        check();
    }
});