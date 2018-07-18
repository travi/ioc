const dependencies = {};

export function register(name, dependency) {
  dependencies[name] = dependency;
}

export function use(name) {
  if (!dependencies[name]) throw new Error('Attempted to use a dependency that has not been registered');

  return dependencies[name];
}
