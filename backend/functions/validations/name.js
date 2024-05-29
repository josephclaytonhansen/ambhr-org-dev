const validateName = name => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
    if (name.length < 3 || name.length > 30) {
        return false
    }

    if (!/^[a-zA-Z\-'\s]+$/.test(name)) {
        return false
    }

    if (/(.)\1{3,}/.test(name)) {
        return false
    }

    const vowelPattern = new RegExp('[' + vowels.join('') + ']{4,}', 'i')
    const consonantPattern = new RegExp('[' + consonants.join('') + ']{4,}', 'i')
    if (vowelPattern.test(name) || consonantPattern.test(name)) {
        return false
    }

    return true
}