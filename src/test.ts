//superset
type Test={
	name:string;
	age: number;	
};

showTestParameter({
	name: "TEST A",
	age: 21,
})

const tst:Test={
	name: "TEST B",
	age: 52,
};

function helloWorld(){
	console.log("Hello world!");
}

function showTest(){
	console.log(tst);
}

function showTestParameter(tst:Test){
	console.log(tst);
}

helloWorld();
showTest();
