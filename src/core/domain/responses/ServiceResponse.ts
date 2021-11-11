interface ServiceResponse<T = Record<string, string>> {
    data?: T;
    error?: string;
}

export default ServiceResponse;
