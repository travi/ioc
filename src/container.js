const dependencies = {};

export function register(name, dependency) {
    dependencies[name] = dependency;
}

export function use(name) {
    return dependencies[name];
}
