export const APP_CONFIG = {
    CHAT_ID: '6928425325',

    TOKEN: '7669098850:AAFkB5IGIn8fK-pd086C9zjBtFvKWmTnGRo',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
