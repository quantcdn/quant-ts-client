/**
 * Prepare URLs for quant.
 */

export class QuantURL {
  /**
   * Prepare a URI to work with Quant.
   *
   * @param {string} uri
   *   The URI to prepare.
   *
   * @return {string}
   *   The prepared URI
   */
  public static prepare(uri) {
    uri = uri.startsWith('/') ? uri : `/${uri}`;
    uri = uri.toLowerCase();
    uri = uri.replace(/^\/\//, '/');
    uri = uri.replace(/(\/)index\.html/, '$1');

    if (uri.length > 1) {
      return uri.endsWith('/') ? uri.slice(0, -1) : uri;
    }
    return uri;
  }

};
