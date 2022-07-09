function myLogFunction() {
	return (str: string) => {
		console.log(str);
	};
}

const logger = myLogFunction();
logger("your string");

function createLoggerClass() {
	return class MyLoggerClass {
		private completeLog: string = "";
		log(str: string) {
			console.log(str);
			this.completeLog += str += "\n";
		}
		dumpLog() {
			return this.completeLog;
		}
	};
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log("foo");
console.log(logger2.dumpLog());

function SimpleMemoryDatabase<T>() {
	return class SimpleMemoryDatabase {
		private db: Record<string, T> = {};

		set(id: string, value: T): void {
			this.db[id] = value;
		}

		get(id: string): T {
			return this.db[id];
		}

		getObject(): Record<string, T> {
			return this.db;
		}
	};
}
