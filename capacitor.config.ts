import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Expense_tracker_Frontend',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
