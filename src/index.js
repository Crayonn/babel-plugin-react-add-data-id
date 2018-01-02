export default function ({ types: t }) {
  const defaultPrefix = 'data';
  let prefix;
  let nodeNameAttr;
  let id = 0;

  const visitor = {
    Program(path, state) {
      if (state.opts.prefix) {
        prefix = `data-${state.opts.prefix}`;
      } else {
        prefix = defaultPrefix;
      }
      nodeNameAttr = `${prefix}-id`;
    },
    JSXOpeningElement(path, state) {
      const attributes = path.container.openingElement.attributes;

      const newAttributes = [];

      if (path.container && path.container.openingElement &&
        path.container.openingElement.name &&
        path.container.openingElement.name.name) {
        newAttributes.push(t.jSXAttribute(
          t.jSXIdentifier(nodeNameAttr),
          t.stringLiteral(`node-${id}`))
        );

        id += 1;
      }

      attributes.push(...newAttributes);
    },
  };

  return {
    visitor,
  };
}
