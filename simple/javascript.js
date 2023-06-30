path = location.href.split("/")
console.log(path[2])
if (path[2] == "localhost:8000") {
    if (location.href == "http://localhost:8000/simple/question1.html") {
        question = 1
    } else if (location.href == "http://localhost:8000/simple/question2.html") {
        question = 2
    } else if (location.href == "http://localhost:8000/simple/question3.html") {
        question = 3
    } else if (location.href == "http://localhost:8000/simple/question4.html") {
        question = 4
    }
    pages = {
        1: "http://localhost:8000/simple/question2.html",
        2: "http://localhost:8000/simple/question3.html",
        3: "http://localhost:8000/simple/question4.html",
        4: "http://localhost:8000/simple/end.html"
    }
} else if (path[2] == "the-real-finnventor.github.io") {
    if (location.href == "https://the-real-finnventor.github.io/quiz/simple/question1.html") {
        question = 1
    } else if (location.href == "https://the-real-finnventor.github.io/quiz/simple/question2.html") {
        question = 2
    } else if (location.href == "https://the-real-finnventor.github.io/quiz/simple/question3.html") {
        question = 3
    } else if (location.href == "https://the-real-finnventor.github.io/quiz/simple/question4.html") {
        question = 4
    }
    pages = {
        1: "https://the-real-finnventor.github.io/quiz/simple/question2.html",
        2: "https://the-real-finnventor.github.io/quiz/simple/question3.html",
        3: "https://the-real-finnventor.github.io/quiz/simple/question4.html",
        4: "https://the-real-finnventor.github.io/quiz/simple/end.html"
    }
}

answers = {
    1: "2",
    2: "3",
    3: "4",
    4: "5"
}

function check() {
    box_text = document.getElementById("answer").value;
    if (box_text == answers[question]) {
        location.href = pages[question]
    } else {
        document.getElementById("incorrect").className = "alert alert-dismissible alert-primary"
    }
}