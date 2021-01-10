module.exports = {
  withDb: { useDB: true },
  withSessions: { useSessions: true },
  withFS: { useFileStorage: true },
  withDbSessions: { useDB: true, useSessions: true },
  withDbFS: { useDB: true, useFileStorage: true },
  withSessionsFS: { useSessions: true, useFileStorage: true },
  withAll: { useDB: true, useSessions: true, useFileStorage: true },
};
