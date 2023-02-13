

function longestRepetition(s) {
    if (s.length == 0) {
        return ["", 0];
    } else if (s.length == 1) {
        return [s, 1];
    } else {
        let maxDetected = 1; 
        let presentChar = "";
        let presentCount = 0; 
        let answer = [s[0], 1]; 
        for (let i = 0; i < s.length - 1; i++) {
            presentChar = s[i];
            presentCount = 1; 
            for (let j = i + 1; j < s.length; j++) {
                if (s[j] == s[i]) {
                    presentCount += 1;
                } else {
                    break;
                }
            }
            if (presentCount > maxDetected) {
                maxDetected = presentCount;
                answer[0] = presentChar;
                answer[1] = maxDetected;
            }
        }
        return answer;
    }
}