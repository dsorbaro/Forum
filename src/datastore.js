import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyApUDt-eBqEUkRMFOMOY43xioWvxZlZqSM",
  authDomain: "forumnewsdebate.firebaseapp.com",
  databaseURL: "https://forumnewsdebate.firebaseio.com",
  projectId: "forumnewsdebate",
  storageBucket: "forumnewsdebate.appspot.com",
  messagingSenderId: "638986054506",
  appId: "1:638986054506:web:5439028540ccabe1cbd313",
  measurementId: "G-DFV1XJG9MG"
};

firebase.initializeApp(firebaseConfig);

const ourDB = firebase.database();
//const ourAuth = firebase.auth();



export function addNewRequest(request) {
    ourDB.ref('Request/').push({
        request
    });
}

export function fetchRequests(callback) {
    ourDB.ref('Request/').on('value', (snapshot) => {
        const allRequests = snapshot.val();
        callback(allRequests);
    });
}
