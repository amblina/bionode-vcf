/*
 * bionode-vcf
 * https://github.com/shyamrallapalli/bionode-vcf
 *
 * Copyright (c) 2015 Shyam Rallapalli
 * Licensed under the MIT license.
 */

// chai is an assertion library
//var chai = require('chai');

// @see http://chaijs.com/api/assert/
//var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
//chai.expect();
//chai.should();

// requires your main app (specified in index.js)
var VCF = require('../lib/index');
var path = require('path');
var assert = require('assert');
var filePath = path.join(__dirname, 'sample.vcf');

var allFeatures = [];

describe('VCF', function(){
  describe('.read', function(){
    it('should read without error', function(done){

        function onFeature(vcf) {
            allFeatures.push(vcf);
        }

        VCF.read(filePath).on('data', onFeature).on('end', done);

    });
    it('should look like a valid output', function () {
        assert.notStrictEqual(allFeatures, validOutput);
    })
  });
});


var validOutput = [
    {   chr: 'Cf746836_TGAC_s1v1_scaffold_4',
        pos: '5607',
        id: '.',
        ref: 'G',
        alt: 'C',
        qual: '18.1',
        filter: '.',
        varinfo:
        {   VAR: 'SNP',
            VARINFO: 'substitution',
            DP: '6',
            VDB: '6.560000e-02',
            RPB: '1.427508e+00',
            AF1:' 0.5',
            AC1: '1',
            DP4: '3,1,1,1',
            MQ: '60',
            FQ: '21',
            PV4: '1,0.0023,1,1' },
        sampleinfo:
            [ { NAME: 'foxley_wood1_bwa-mem-sorted.bam',
                GT: '0/1',
                PL: '48,0,123',
                GQ: '51' } ],
        attributes:
        {   vcfver: 'VCFv4.1',
            samtools: '0.1.19-44428cd',
            reference: 'file://../index/Chalara_fraxinea_TGAC_s1v1_scaffolds.fa' }
    },
    {   chr: 'Cf746836_TGAC_s1v1_scaffold_12',
        pos: '672',
        id: '.',
        ref: 'CAAA',
        alt: 'CAA',
        qual: '128',
        filter: '.',
        varinfo:
        {   VAR: 'INDEL',
            VARINFO: 'deletion',
            IS: '16,0.727273',
            DP: '22',
            VDB: '1.896486e-01',
            AF1: '1',
            AC1: '2',
            DP4: '0,0,0,20',
            MQ: '60',
            FQ: '-94.5' },
        sampleinfo:
            [ { NAME: 'foxley_wood1_bwa-mem-sorted.bam',
                GT: '1/1',
                PL: '169,60,0',
                GQ: '99' } ],
        attributes:
        {   vcfver: 'VCFv4.1',
            samtools: '0.1.19-44428cd',
            reference: 'file://../index/Chalara_fraxinea_TGAC_s1v1_scaffolds.fa' }
    },
    {   chr: 'Cf746836_TGAC_s1v1_scaffold_12',
        pos: '2911',
        id: '.',
        ref: 'ATA',
        alt: 'ATACTCGGTA',
        qual: '214',
        filter: '.',
        varinfo:
        {   VAR: 'INDEL',
            VARINFO: 'insertion',
            IS: '16,0.727273',
            DP: '22',
            VDB: '3.802706e-02',
            AF1: '1',
            AC1: '2',
            DP4: '0,0,9,8',
            MQ: '60',
            FQ: '-85.5' },
        sampleinfo:
            [ { NAME: 'foxley_wood1_bwa-mem-sorted.bam',
                GT: '1/1',
                PL: '255,51,0',
                GQ: '99' } ],
        attributes:
        {   vcfver: 'VCFv4.1',
            samtools: '0.1.19-44428cd',
            reference: 'file://../index/Chalara_fraxinea_TGAC_s1v1_scaffolds.fa' }
    }
];

