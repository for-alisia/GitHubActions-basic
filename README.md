## Basic example of GitHub actions usage

The project is minimal React app with couple of tests included to be able to run test script in CI

- To skip CI you can add [skip ci] or [skip actions] to your commit message like:
```
git commit -m "My commit [skip ci]"
```

- To pass several paths to upload-artifact action
```
- name: Upload artifact
        uses: actions/upload-artifact@v3
        with:
          name: dist-files
          path: |
            dist
            package.json 
```