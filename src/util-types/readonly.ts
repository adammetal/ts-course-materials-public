type AppConfig = {
  port: number;
  title: string;
};

type FixedAppConfig = Readonly<AppConfig>;

const appConfig: AppConfig = {
  port: 8080,
  title: "My App",
};

const getAppConfig = (): Readonly<AppConfig> => {
  return appConfig;
}

