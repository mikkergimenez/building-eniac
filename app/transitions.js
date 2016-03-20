export default function() {
    this.transition(
      this.fromRoute('index', 'index_loading'),
      this.toRoute('index', 'index_loading'),
      this.includingInitialRender(),
      this.use('crossFade', { duration: 2000 }),
      this.debug()
    )

  this.transition(
    this.toRoute('index', 'index_loading'),
    this.includingInitialRender(),
    this.use('fade', { duration: 2000 }),
    this.debug()
  )
}
