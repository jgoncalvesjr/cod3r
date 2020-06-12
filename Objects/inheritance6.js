function session(name, videoID) {
    this.name = name
    this.videoID = videoID
}

const session1 = new session('Welcome', 123)
const session2 = new session('Be right back', 456)
console.log(session1, session2)

// simulating New command

function newSim(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const session3 = newSim(session, 'Welcome', 123)
const session4 = newSim(session, 'Be right back', 456)
console.log(session3, session4)