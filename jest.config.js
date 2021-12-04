module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ["src", "test"],
    moduleDirectories: ["node_modules", "src", "test"],
    moduleNameMapper: {
        "src/(.*)": "<rootDir>/src/$1",
        "test/(.*)": "<rootDir>/test/$1",
    }
};
