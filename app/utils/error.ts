const raise = (error: string): never => {
	throw new Error(error);
};

export { raise }