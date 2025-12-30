class CallCenter {
    constructor() {
        this.calls = [];
    }

    receiveCall(call) {
        this.calls.push(call);
    }

    answerCall() {
        if (this.calls.length === 0) {
            console.log("No calls waiting");
            return;
        }
        console.log("Answering:", this.calls.shift());
    }
}

const callCenter = new CallCenter();

callCenter.receiveCall("Call from Alice");
callCenter.receiveCall("Call from Bob");
callCenter.receiveCall("Call from Charlie");

callCenter.answerCall();
callCenter.answerCall();
callCenter.answerCall();
callCenter.answerCall();