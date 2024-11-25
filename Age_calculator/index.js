function calculateAge() {
    const dobInput = document.getElementById("dob")?.value;
    const result = document.getElementById("result");

    if (!dobInput) {
        result.textContent = "Please enter a valid date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    result.textContent = `You are ${age} years old.`;
}