// import Taskbar from 'components/system/Taskbar/Taskbar';
import dynamic from 'next/dynamic';
import type { Process } from 'types/contexts/process';

// const STARTUP_PROCESSES: string[] = ['HelloWorld', 'Taskbar'];

// const processDirectory: Processes = {
//   HelloWorld: {
//     Component: dynamic(() => import('components/apps/HelloWorld')),
//     hasWindow: true
//   },
//   Taskbar: {
//     Component: Taskbar
//     //  dynamic(() => import('components/system/Taskbar'))
//   }
// };

// export const getStartupProcesses = (): Processes =>
//   STARTUP_PROCESSES.reduce(
//     (processes, processId) => ({
//       ...processes,
//       [processId]: processDirectory[processId]
//     }),
//     {}
//   );

export const HelloWorld: Process = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true
};

export const Taskbar: Process = {
  Component: dynamic(() => import('components/system/Taskbar/Taskbar'))
};
