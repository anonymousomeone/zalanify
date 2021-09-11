function randBool(percent) {
    var randint = Math.floor(Math.random() * 101)
    if (randint <= percent) {
        return true
    }
    return false
}

function emojis(number) {
    var emojis = ['😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦'];
    var emoji = emojis[Math.floor(Math.random() * emojis.length)]
    var result = ''
    for (var i = 0; i < number; i++) {
        result += emoji
    }
    return result;
} 

function names(sentBy){
    return sentBy.charAt(0) + emojis(3)
}

function zalanify(string, percent) {
    var arr = string.split(' ')
    var newArr = []

    arr.forEach(function(entry) {
        newArr.push(entry + ' ')
    });
    arr = newArr
    const result = []
    var arrayLength = arr.length;
    for (var i = 0; i < arrayLength; i++) {
        var str = arr[i];
        for (var x = 0; x < str.length; x++) {
            var c = str.charAt(x);
            if (randBool(percent)) {
                result.push(emojis(1))
            } else { result.push(str.charAt(x)) }
        }
    }
    var word = ''
    arr = []
    for (var i = 0; i < result.length; i++) {
        if (word != ' ') {
            word += result[i]
        } else {
            arr.push(word)
            word = ''
        }
    }
    return word;
    // wtf i just realized i couldve used .replace() for this 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️
}

exports.zalanify = zalanify
exports.randBool = randBool
exports.emojis = emojis
exports.names = names
