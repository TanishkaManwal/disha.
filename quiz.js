function calculateResult() {
      const form = document.forms["quizForm"];
      let answers = [];
      for (let i = 1; i <= 3; i++) {
        const answer = form[`q${i}`].value;
        if (answer) answers.push(answer);
      }

      if (answers.length < 3) {
        alert("Please answer all questions.");
        return;
      }

      let careerSuggestion = "";
      if (answers.includes("Creative Arts") || answers.includes("Creative")) {
        careerSuggestion += "Design, Writing, or Marketing might be great fits for your creativity.<br>";
      }
      if (answers.includes("Data Analysis") || answers.includes("Analytical")) {
        careerSuggestion += "Consider careers in Data Science, Analytics, or Engineering.<br>";
      }
      if (answers.includes("Leadership") || answers.includes("Persuasive")) {
        careerSuggestion += "Management, Entrepreneurship, or Public Relations may suit your skills.<br>";
      }
      if (answers.includes("Healthcare") || answers.includes("Empathetic")) {
        careerSuggestion += "Healthcare, Counseling, or Social Work could be fulfilling options.<br>";
      }
      if (answers.includes("Engineering") || answers.includes("Practical")) {
        careerSuggestion += "Mechanical Engineering, Robotics, or Technical roles might interest you.<br>";
      }

      document.getElementById("result").innerHTML = `<h3>Your Suggested Careers:</h3>${careerSuggestion}`;
      document.getElementById("result").style.display = "block";
    }