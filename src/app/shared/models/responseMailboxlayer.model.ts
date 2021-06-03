export class ResponseMailboxlayer {
    email: string = "";
    did_you_mean: string = "";
    user: string = "";
    domain: string = "";
    format_valid: boolean = false;
    mx_found: boolean = false;
    smtp_check: boolean = false;
    catch_all: boolean = false;
    role: boolean = false;
    disposable: boolean = false;
    free: boolean = false;
    score: number = 0.0;
}